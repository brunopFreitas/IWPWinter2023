import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import RocketList from '../components/RocketList';
import './Rockets.css';

const Tab1: React.FC = () => {
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
        <RocketList />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
