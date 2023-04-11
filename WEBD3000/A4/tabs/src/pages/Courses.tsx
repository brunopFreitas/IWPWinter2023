import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRefresher, IonRefresherContent } from '@ionic/react';
import CoursesList from '../components/CoursesList';
import './Courses.css';

const Courses: React.FC = () => {
  const doRefresh = () => {
    // Refresh the data here, if needed
    window.location.reload();
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
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
            <IonTitle size="large">Courses</IonTitle>
          </IonToolbar>
        </IonHeader>
          <CoursesList />
      </IonContent>
    </IonPage>
  );
};

export default Courses;
