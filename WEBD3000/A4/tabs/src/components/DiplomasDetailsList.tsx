import { useEffect, useState } from 'react';
import axios from 'axios';
import { IonItem, IonLabel, IonList, IonBackButton, IonButtons  } from '@ionic/react';

interface DiplomasDetailsListProps {
  id: string;
}

interface DiplomasDetailsList {
    diploma: { Id: number, Title: string }[][];
    diplomaAdvisors: {
      instructorName: string;
      academicYear: string;
      diplomaYear: string;
      diplomaYearSection: string;
    }[][];
    rowsAffected: number;
  }
  

const DiplomasDetails: React.FC<DiplomasDetailsListProps> = ({ id }) => {

  const [DiplomasDetails, setDiplomasDetails] = useState<DiplomasDetailsList[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://webd3000-w0448225-function-app.azurewebsites.net/api/Diploma/?id=${ id }`)
      setDiplomasDetails(response.data)
    })()
  }, [])

  return (
    <IonList>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/Diplomas" />
          </IonButtons>
      {
        DiplomasDetails.map(DiplomasemestersDetails => 
          {
          return (
                  DiplomasemestersDetails.diplomaAdvisors[0].map((advisor, i) => (
                    <IonItem 
                    button 
                    detail 
                    key={i}>
                      <IonLabel>
                        <div key={i}>
                          <h2>{advisor.instructorName}</h2>
                          <p>academicYear: {advisor.academicYear}</p>
                          <p>diplomaYear: {advisor.diplomaYear}</p>
                          <p>diplomaYearSection: {advisor.diplomaYearSection}</p>
                        </div>
                      </IonLabel>
                    </IonItem>
                  )))})}        
    </IonList>
  );
};

export default DiplomasDetails;
