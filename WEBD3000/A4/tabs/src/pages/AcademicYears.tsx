import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRefresher, IonRefresherContent } from '@ionic/react';
import AcademicYearsList from '../components/AcademicYearsList';
import './AcademicYears.css';

const AcademicYears: React.FC = () => {
  const doRefresh = () => {
    // Refresh the data here, if needed
    window.location.reload();
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Academic Years</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent 
            pullingIcon="refresh-outline"
            pullingText="Reloading"
          />
        </IonRefresher>
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