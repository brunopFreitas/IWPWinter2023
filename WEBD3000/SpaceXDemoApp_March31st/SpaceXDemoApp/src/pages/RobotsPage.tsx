import { IonContent, 
          IonHeader, 
          IonPage, 
          IonTitle, 
          IonToolbar} from '@ionic/react';
import RobotsList from '../components/RobotsList';
import './RobotsPage.css';

const RobotsPage: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Robots</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <RobotsList />
      </IonContent>
    </IonPage>
  );
};

export default RobotsPage;
