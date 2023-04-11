import { IonItem, IonLabel, IonList } from '@ionic/react';
import { useEffect, useState } from 'react';
import './AcademicYearsList.css';
import axios from 'axios';

interface AcademicYearsListItem {
  Id: string;
  Title: string;
}

const AcademicYearsList: React.FC = () => {

  const [AcademicYears, setAcademicYears] = useState<AcademicYearsListItem[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://webd3000-w0448225-function-app.azurewebsites.net/api/academicYears`)
      setAcademicYears(response.data[0])
    })()
  }, [])

  return (
    <IonList>
      {
        AcademicYears.map(AcademicYears => {
          return (
              <IonItem 
                  button 
                  detail 
                  key={AcademicYears.Id}
                  routerLink={ `/AcademicYears/${AcademicYears.Id}` }>
                <IonLabel>{AcademicYears.Title}</IonLabel>
              </IonItem>
          )
        })
      }
    </IonList>
  );
};

export default AcademicYearsList;
