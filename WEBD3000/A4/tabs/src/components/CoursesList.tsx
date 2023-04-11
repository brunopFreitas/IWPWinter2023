import { IonItem, IonLabel, IonList } from '@ionic/react';
import { useEffect, useState } from 'react';
import './CoursesList.css';
import axios from 'axios';

interface CoursesListItem {
  Id: string;
  Title: string;
  CourseCode: string;
}

const CoursesList: React.FC = () => {

  const [Courses, setCourses] = useState<CoursesListItem[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://webd3000-w0448225-function-app.azurewebsites.net/api/course`)
      setCourses(response.data[0])
    })()
  }, [])

  return (
    <IonList>
      {
        Courses.map(Courses => {
          return (
              <IonItem 
                  button 
                  detail 
                  key={Courses.Id}
                  routerLink={ `/Courses/${Courses.Id}` }>
                <IonLabel>{Courses.CourseCode} { - Courses.Title}</IonLabel>
              </IonItem>
          )
        })
      }
    </IonList>
  );
};

export default CoursesList;
