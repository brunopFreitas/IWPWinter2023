const DB = require('./DB')

module.exports = {
    async fetchMyCourseData (id_parameter) {
        if(id_parameter!=="") {
            try {
                // make sure that any items are correctly URL encoded in the connection string
                let DBOn = await DB.connectToMyDB()
                const course = await DBOn.query `select Id, Title, CourseCode from Courses where Id=${id_parameter}`
                const coursePrerequisites = await DBOn.query `SELECT c.Id, c.Title, c.CourseCode
                FROM Courses c
                WHERE c.Id in (
                SELECT cp.CourseId FROM CoursePrerequisites cp WHERE cp.PrerequisiteId  = ${id_parameter}
                ) order by c.CourseCode`
                const courseHasPreRequisites = await DBOn.query `SELECT c.Id, c.Title, c.CourseCode
                FROM Courses c
                WHERE c.Id in (
                SELECT cp.PrerequisiteId FROM CoursePrerequisites cp WHERE cp.CourseId  = ${id_parameter}
                ) order by c.CourseCode`
                DB.closeTheConnection(DBOn)
                const result = []
                result.push({
                    "course": course.recordsets, "courseIsPrerequisiteFor": coursePrerequisites.recordsets, "courseHasPreRequisites": courseHasPreRequisites.recordsets
                })
                return result
            } catch (err) {
                console.log(err)
            }
        } 
        else if (id_parameter==="") {
            try {
                // make sure that any items are correctly URL encoded in the connection string
                let DBOn = await DB.connectToMyDB()
                const result = await DBOn.query `select Id, Title, CourseCode from Courses order by CourseCode`
                DB.closeTheConnection(DBOn)
                return result.recordsets
            } catch (err) {
                console.log(err)
            }
        }
    },
    async fetchMyAcademicYearData (id_parameter) {
        if(id_parameter!=="") {
            try {
                // make sure that any items are correctly URL encoded in the connection string
                let DBOn = await DB.connectToMyDB()
                const academicYear = await DBOn.query `select ac.Id, ac.Title from AcademicYears ac where ac.Id=${id_parameter} order by ac.Title`
                const academicYearSemester = await DBOn.query `SELECT s.name, s.StartDate, s.EndDate 
                FROM Semesters s 
                WHERE s.AcademicYearId in 
                (select ac.Id from AcademicYears ac where ac.Id=${id_parameter}) order by s.StartDate DESC `
                const advisingAssignment = await DBOn.query `SELECT CONCAT(i.FirstName, ' ', i.LastName) as instructorName, 
                d.title as diploma, 
                dy.title as diplomaYear, 
                dys.title as diplomaYearSection
                FROM Diplomas d
                INNER JOIN DiplomaYears dy on dy.DiplomaId = d.Id
                INNER JOIN DiplomaYearSections dys on dy.Id = dys.DiplomaYearId
                INNER JOIN AdvisingAssignments aa on aa.DiplomaYearSectionId  = dys.Id
                INNER JOIN Instructors i on aa.InstructorId = i.Id
                INNER JOIN AcademicYears ay on dys.AcademicYearId = ay.Id
                WHERE ay.Id = 1
                ORDER BY d.Title, dy.Title, dys.Title`
                DB.closeTheConnection(DBOn)
                const result = []
                result.push({
                    "academicYear": academicYear.recordsets, "academicYearSemesters": academicYearSemester.recordsets, "academicYearAdvisingAssignment": advisingAssignment.recordsets
                })
                return result
            } catch (err) {
                console.log(err)
            }
        } 
        else if (id_parameter==="") {
            try {
                // make sure that any items are correctly URL encoded in the connection string
                let DBOn = await DB.connectToMyDB()
                const result = await DBOn.query `select ac.Id, ac.Title from AcademicYears ac order by ac.Title`
                DB.closeTheConnection(DBOn)
                return result.recordsets
            } catch (err) {
                console.log(err)
            }
        }
    },

    async fetchMyDiplomaData (id_parameter) {
        if(id_parameter!=="") {
            try {
                // make sure that any items are correctly URL encoded in the connection string
                let DBOn = await DB.connectToMyDB()
                const diploma = await DBOn.query `select d.Id, d.Title 
                from Diplomas d where d.Id=${id_parameter} order by d.Title ASC`
                const diplomaAdvisor = await DBOn.query `SELECT CONCAT(i.FirstName, ' ', i.LastName) as instructorName, ay.title as academicYear, dy.title as diplomaYear, dys.title as diplomaYearSection 
                FROM Diplomas d
                INNER JOIN DiplomaYears dy on dy.DiplomaId = d.Id
                INNER JOIN DiplomaYearSections dys on dy.Id = dys.DiplomaYearId
                INNER JOIN AdvisingAssignments aa on aa.DiplomaYearSectionId  = dys.Id
                INNER JOIN Instructors i on aa.InstructorId = i.Id
                INNER JOIN AcademicYears ay on dys.AcademicYearId = ay.Id
                WHERE d.Id = ${id_parameter}
                ORDER BY ay.Title DESC, dy.Title ASC, dys.Title ASC`
                DB.closeTheConnection(DBOn)
                const result = []
                result.push({
                    "diploma": diploma.recordsets, "diplomaAdvisors": diplomaAdvisor.recordsets
                })
                return result
            } catch (err) {
                console.log(err)
            }
        } 
        else if (id_parameter==="") {
            try {
                // make sure that any items are correctly URL encoded in the connection string
                let DBOn = await DB.connectToMyDB()
                const result = await DBOn.query `select d.Id, d.Title, count(dy.Id) as DurationInYears 
                from Diplomas d
                inner join DiplomaYears dy on dy.DiplomaId = d.Id	
                group by d.Id, d.Title order by d.Title ASC`
                DB.closeTheConnection(DBOn)
                return result.recordsets
            } catch (err) {
                console.log(err)
            }
        }
    },

    async fetchMyInstructorData (id_parameter) {
        if(id_parameter!=="") {
            try {
                // make sure that any items are correctly URL encoded in the connection string
                let DBOn = await DB.connectToMyDB()
                const instructor = await DBOn.query `SELECT i.Id, i.FirstName, i.LastName
                FROM Instructors i where i.Id=${id_parameter} order by i.LastName ASC`
                const AdvisingAssignments = await DBOn.query `SELECT ay.title as academicYear,
                d.title as diplomaTitle, 
                dy.title as diplomaYear, 
                dys.title as diplomaYearSection 
                FROM Diplomas d
                INNER JOIN DiplomaYears dy on dy.DiplomaId = d.Id
                INNER JOIN DiplomaYearSections dys on dy.Id = dys.DiplomaYearId
                INNER JOIN AdvisingAssignments aa on aa.DiplomaYearSectionId  = dys.Id
                INNER JOIN Instructors i on aa.InstructorId = i.Id
                INNER JOIN AcademicYears ay on dys.AcademicYearId = ay.Id
                WHERE i.Id = 4
                ORDER BY ay.Title DESC, d.Title ASC, dy.Title ASC, dys.Title ASC`
                const CoursesTaught = await DBOn.query `SELECT DISTINCT c.id, c.title, c.CourseCode
                FROM Courses c
                INNER JOIN CourseOfferings co on c.Id = co.CourseId
                INNER JOIN Instructors i on co.InstructorId = i.Id
                WHERE i.Id = 4
                ORDER BY c.CourseCode ASC`
                DB.closeTheConnection(DBOn)
                const result = []
                result.push({
                    "instructor": instructor.recordsets, "AdvisingAssignments": AdvisingAssignments.recordsets, "CoursesTaught": CoursesTaught.recordsets
                })
                return result
            } catch (err) {
                console.log(err)
            }
        } 
        else if (id_parameter==="") {
            try {
                // make sure that any items are correctly URL encoded in the connection string
                let DBOn = await DB.connectToMyDB()
                const result = await DBOn.query `SELECT i.Id, i.FirstName, i.LastName
                FROM Instructors i order by i.LastName ASC`
                DB.closeTheConnection(DBOn)
                return result.recordsets
            } catch (err) {
                console.log(err)
            }
        }
    }


}

