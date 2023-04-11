import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import RocketsList from '../components/RocketsList';
import './RocketsPage.css';

const Rockets: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Rockets</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <RocketsList />
      </IonContent>
    </IonPage>
  );
};

export default Rockets;
