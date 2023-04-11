import { IonItem, IonLabel, IonList } from '@ionic/react';
import { useEffect, useState } from 'react';
import './DiplomasList.css';
import axios from 'axios';

interface DiplomasListItem {
  Id: string;
  Title: string;
  DurationInYears: string;
}

const DiplomasList: React.FC = () => {

  const [Diplomas, setDiplomas] = useState<DiplomasListItem[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://webd3000-w0448225-function-app.azurewebsites.net/api/Diploma`)
      setDiplomas(response.data[0])
    })()
  }, [])

  return (
    <IonList>
      {
        Diplomas.map(Diplomas => {
          return (
              <IonItem 
                  button 
                  detail 
                  key={Diplomas.Id}
                  routerLink={ `/Diplomas/${Diplomas.Id}` }>
                <IonLabel>{Diplomas.Title}</IonLabel>
              </IonItem>
          )
        })
      }
    </IonList>
  );
};

export default DiplomasList;
