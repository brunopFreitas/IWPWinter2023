import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRefresher, IonRefresherContent } from '@ionic/react';
import DiplomasList from '../components/DiplomasList';
import './Diplomas.css';

const Diplomas: React.FC = () => {
  const doRefresh = () => {
    // Refresh the data here, if needed
    window.location.reload();
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Diplomas</IonTitle>
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
            <IonTitle size="large">Diplomas</IonTitle>
          </IonToolbar>
        </IonHeader>
          <DiplomasList />
      </IonContent>
    </IonPage>
  );
};

export default Diplomas;
