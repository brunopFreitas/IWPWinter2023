import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import AcademicYearsList from '../components/AcademicYearsList';
import './AcademicYears.css';

const AcademicYears: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Academic Years</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Academic Years</IonTitle>
          </IonToolbar>
        </IonHeader>
          <AcademicYearsList />
      </IonContent>
    </IonPage>
  );
};

export default AcademicYears;
