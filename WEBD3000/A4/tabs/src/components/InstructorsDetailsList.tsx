import { useEffect, useState } from 'react';
import axios from 'axios';
import { IonItem, IonLabel, IonList, IonBackButton, IonButtons  } from '@ionic/react';

interface InstructorsDetailsListProps {
  id: string;
}

interface InstructorsDetailsList {
    instructor: {
      Id: number;
      FirstName: string;
      LastName: string;
    }[][];
    AdvisingAssignments: {
      academicYear: string;
      diplomaTitle: string;
      diplomaYear: string;
      diplomaYearSection: string;
    }[][];
    CoursesTaught: {
      id: number;
      title: string;
      CourseCode: string;
    }[][];
    rowsAffected: number;
  }

const InstructorsDetails: React.FC<InstructorsDetailsListProps> = ({ id }) => {

  const [InstructorsDetails, setInstructorsDetails] = useState<InstructorsDetailsList[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://webd3000-w0448225-function-app.azurewebsites.net/api/Instructor/?id=${ id }`)
      setInstructorsDetails(response.data)
    })()
  }, [])



  return (
    <IonList>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/Instructors" />
          </IonButtons>
      {
        InstructorsDetails.map(InstructorsDetails => 
          { 
          return (
            InstructorsDetails.CoursesTaught[0].map((course, i) => (
                    <IonItem 
                    button 
                    detail 
                    routerLink={`/Instructors/Courses/${course.id}`}
                    key={course.id}>
                      <IonLabel>
                        <div key={i}>
                            <h2>Course</h2>
                            <p>{course.CourseCode + " - " + course.title}</p>
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

export default InstructorsDetails;
