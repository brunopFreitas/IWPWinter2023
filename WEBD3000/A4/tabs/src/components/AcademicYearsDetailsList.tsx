import { useEffect, useState } from 'react';
import './AcademicYearsDetailsList.css';
import axios from 'axios';
import { IonItem, IonLabel, IonList, IonBackButton, IonButtons  } from '@ionic/react';

interface AcademicYearsDetailsListProps {
  id: string;
}

interface AcademicYear {
    Id: number;
    Title: string;
  }
  
  interface AcademicYearSemester {
    name: string;
    StartDate: string;
    EndDate: string;
  }
  
  interface AcademicYearAdvisingAssignment {
    instructorName: string;
    diploma: string;
    diplomaYear: string;
    diplomaYearSection: string;
  }
  
  interface AcademicYearsDetailsList {
    academicYear: AcademicYear[][];
    academicYearSemesters: AcademicYearSemester[][];
    academicYearAdvisingAssignment: AcademicYearAdvisingAssignment[][];
    rowsAffected: number;
  }
  

const AcademicYearsDetails: React.FC<AcademicYearsDetailsListProps> = ({ id }) => {

  const [AcademicYearsDetails, setAcademicYearsDetails] = useState<AcademicYearsDetailsList[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://webd3000-w0448225-function-app.azurewebsites.net/api/academicYears/?id=${ id }`)
      setAcademicYearsDetails(response.data)
    })()
  }, [])

  return (
    <IonList>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/AcademicYears" />
          </IonButtons>
      {
        AcademicYearsDetails.map(academicYearSemestersDetails => 
          {
          return (
                  academicYearSemestersDetails.academicYearSemesters[0].map((semester, i) => (
                    <IonItem 
                    button 
                    detail 
                    key={academicYearSemestersDetails.academicYear[0][0].Id}>
                      <IonLabel>
                        <div key={i}>
                          <h2>{semester.name}</h2>
                          <p>Start Date: {semester.StartDate}</p>
                          <p>End Date: {semester.EndDate}</p>
                        </div>
                      </IonLabel>
                    </IonItem>
                  )))})}        
    </IonList>
  );
};

export default AcademicYearsDetails;
