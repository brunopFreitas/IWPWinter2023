import { IonItem, IonLabel, IonList } from '@ionic/react';
import { useEffect, useState } from 'react';
import './InstructorsList.css';
import axios from 'axios';

interface InstructorsListItem {
  Id: string;
  FirstName: string;
  LastName: string;
}

const InstructorsList: React.FC = () => {

  const [Instructors, setInstructors] = useState<InstructorsListItem[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://webd3000-w0448225-function-app.azurewebsites.net/api/Instructor`)
      setInstructors(response.data[0])
    })()
  }, [])

  return (
    <IonList>
      {
        Instructors.map(Instructors => {
          return (
              <IonItem 
                  button 
                  detail 
                  key={Instructors.Id}
                  routerLink={ `/Instructors/${Instructors.Id}` }>
                <IonLabel>{Instructors.LastName}{", " + Instructors.FirstName}</IonLabel>
              </IonItem>
          )
        })
      }
    </IonList>
  );
};

export default InstructorsList;
