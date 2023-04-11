import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import RocketDetails from '../components/RocketDetails';
import './RocketDetailsPage.css';

interface RouteParams {
  id: string;
}

const RocketDetailsPage: React.FC<RouteComponentProps<RouteParams>> = props => {
  console.log(props)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Rocket Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Rocket Details</IonTitle>
          </IonToolbar>
        </IonHeader>
        <RocketDetails id={props.match.params.id} />
      </IonContent>
    </IonPage>
  );
};

export default RocketDetailsPage;
