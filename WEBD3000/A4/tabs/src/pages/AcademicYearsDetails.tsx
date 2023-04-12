import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import AcademicYearsDetailsList from '../components/AcademicYearsDetailsList';
import './AcademicYearsDetails.css';

interface RouteParams {
  id: string;
}

const AcademicYearsDetails: React.FC<RouteComponentProps<RouteParams>> = props => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Academic Years Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Academic Years Details</IonTitle>
          </IonToolbar>
        </IonHeader>
            <AcademicYearsDetailsList id={props.match.params.id} />
      </IonContent>
    </IonPage>
  );
};

export default AcademicYearsDetails;
