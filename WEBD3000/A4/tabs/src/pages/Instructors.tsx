import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRefresher, IonRefresherContent } from '@ionic/react';
import InstructorsList from '../components/InstructorsList';
import './Instructors.css';

const Instructors: React.FC = () => {
  const doRefresh = () => {
    // Refresh the data here, if needed
    window.location.reload();
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Instructors</IonTitle>
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
            <IonTitle size="large">Instructors</IonTitle>
          </IonToolbar>
        </IonHeader>
          <InstructorsList />
      </IonContent>
    </IonPage>
  );
};

export default Instructors;
