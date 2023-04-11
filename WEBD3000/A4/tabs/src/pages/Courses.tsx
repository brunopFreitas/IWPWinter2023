import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CoursesList from '../components/CoursesList';
import './Courses.css';

const Courses: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
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
