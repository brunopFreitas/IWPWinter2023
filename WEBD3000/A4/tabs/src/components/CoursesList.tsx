import { IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { SetStateAction, useEffect, useState } from 'react';
import './CoursesList.css';
import axios from 'axios';

interface CoursesListItem {
  Id: string;
  Title: string;
  CourseCode: string;
}

const CoursesList: React.FC = () => {

  const [Courses, setCourses] = useState<CoursesListItem[]>([]);

  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (event: CustomEvent) => {
    setSearchText(event.detail.value!);
  };

  const filteredData = Courses.filter((item) =>
  item.Title.toLowerCase().includes(searchText.toLowerCase())
);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://webd3000-w0448225-function-app.azurewebsites.net/api/course`)
      setCourses(response.data[0])
    })()
  }, [])

  return (
    <>
      <IonInput
        type="text"
        value={searchText}
        placeholder="Search by Course Name"
        onIonChange={handleSearchTextChange}
      />
      <IonList>
        {filteredData.map((item) => (
          <IonItem 
                  button 
                  detail 
                  key={item.Id}
                  routerLink={ `/Courses/${item.Id}` }>
                <IonLabel>{item.CourseCode} {" - " + item.Title}</IonLabel>
              </IonItem>
        ))}
      </IonList>
    </>
  );
};

export default CoursesList;
