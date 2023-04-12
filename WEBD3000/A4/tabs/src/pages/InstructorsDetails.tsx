import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import InstructorsDetailsList from '../components/InstructorsDetailsList';

interface RouteParams {
  id: string;
}

const CourseDetails: React.FC<RouteComponentProps<RouteParams>> = props => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Course Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Course Details</IonTitle>
          </IonToolbar>
        </IonHeader>
            <InstructorsDetailsList id={props.match.params.id} />
      </IonContent>
    </IonPage>
  );
};

export default CourseDetails;
