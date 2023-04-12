import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendarOutline, bookOutline, schoolOutline, peopleOutline  } from 'ionicons/icons';
import AcademicYears from './pages/AcademicYears';
import Courses from './pages/Courses';
import Diplomas from './pages/Diplomas';
import Instructors from './pages/Instructors';
import AcademicYearsDetails from './pages/AcademicYearsDetails';
import CoursesDetails from './pages/CoursesDetails';
import DiplomasDetails from './pages/DiplomasDetails';
import InstructorsDetails from './pages/InstructorsDetails';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/AcademicYears">
            <AcademicYears />
          </Route>
          <Route exact path="/AcademicYears/:id" component={AcademicYearsDetails} />
          <Route exact path="/Courses">
            <Courses />
          </Route>
          <Route exact path="/Courses/:id" component={CoursesDetails} />
          <Route path="/Diplomas">
            <Diplomas />
          </Route>
          <Route path="/Diplomas/:id" component={DiplomasDetails} />
          <Route path="/Instructors">
            <Instructors />
          </Route>
          <Route path="/Instructors/:id" component={InstructorsDetails} />
          <Route path="/Instructors/Courses/:id" component={CoursesDetails} />
          <Route exact path="/">
            <Redirect to="/AcademicYears" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="AcademicYears" href="/AcademicYears">
            <IonIcon aria-hidden="true" icon={calendarOutline} />
            <IonLabel>Academic Year</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Courses" href="/Courses">
            <IonIcon aria-hidden="true" icon={bookOutline} />
            <IonLabel>Courses</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Diplomas" href="/Diplomas">
            <IonIcon aria-hidden="true" icon={schoolOutline} />
            <IonLabel>Diplomas</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Instructors" href="/Instructors">
            <IonIcon aria-hidden="true" icon={peopleOutline} />
            <IonLabel>Instructors</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
