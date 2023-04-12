import { useEffect, useState } from 'react';
import axios from 'axios';
import { IonItem, IonLabel, IonList, IonBackButton, IonButtons  } from '@ionic/react';

interface CoursesDetailsListProps {
  id: string;
}

interface Course {
    Id: number;
    Title: string;
    CourseCode: string;
  }
  
interface CoursesDetailsList {
    course: Course[][];
    courseIsPrerequisiteFor: Course[][];
    courseHasPreRequisites: Course[][];
  }  

const CoursesDetails: React.FC<CoursesDetailsListProps> = ({ id }) => {

  const [CoursesDetails, setCoursesDetails] = useState<CoursesDetailsList[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://webd3000-w0448225-function-app.azurewebsites.net/api/Course/?id=${ id }`)
      setCoursesDetails(response.data)
    })()
  }, [])



  return (
    <IonList>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/Courses" />
          </IonButtons>
      {
        CoursesDetails.map(CoursesDetails => 
          { 
          return (
            CoursesDetails.course[0].map((course, i) => (
                    <IonItem 
                    button 
                    detail 
                    key={course.Id}>
                      <IonLabel>
                        <div key={i}>
                            <h2>Course</h2>
                            <p>{course.CourseCode + " - " + course.Title}</p>
                        </div>
                      </IonLabel>
                    </IonItem>
                  ))
            )
          }
        )}
        {
        CoursesDetails.map(CoursesDetails => 
          { 
          return (
            CoursesDetails.courseIsPrerequisiteFor[0].map((course, i) => (
                    <IonItem 
                    button 
                    detail 
                    key={course.Id}>
                      <IonLabel>
                        <div key={i}>
                            <h2>This course is pre-requisite for</h2>
                            <p>{course.CourseCode + " - " + course.Title}</p>
                        </div>                     
                      </IonLabel>
                    </IonItem>
                  ))
            )
          }
        )}
        {
        CoursesDetails.map(CoursesDetails => 
          { 
          return (
            CoursesDetails.courseHasPreRequisites[0].map((course, i) => (
                    <IonItem 
                    button 
                    detail 
                    key={course.Id}>
                      <IonLabel>
                        <div key={i}>
                            <h2>This course has as a pre-requisite</h2>
                            <p>{course.CourseCode + " - " + course.Title}</p>
                        </div>                     
                      </IonLabel>
                    </IonItem>
                  ))
            )
          }
        )}
        
    </IonList>
  );
};

export default CoursesDetails;
