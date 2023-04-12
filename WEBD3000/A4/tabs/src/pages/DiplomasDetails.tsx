import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import DiplomasDetailsList from '../components/DiplomasDetailsList';

interface RouteParams {
  id: string;
}

const DiplomasDetails: React.FC<RouteComponentProps<RouteParams>> = props => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Diplomas Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Diplomas Details</IonTitle>
          </IonToolbar>
        </IonHeader>
            <DiplomasDetailsList id={props.match.params.id} />
      </IonContent>
    </IonPage>
  );
};

export default DiplomasDetails;
