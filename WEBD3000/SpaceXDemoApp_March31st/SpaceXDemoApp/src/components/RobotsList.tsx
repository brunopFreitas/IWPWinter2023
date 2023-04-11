import { IonAvatar, 
         IonImg, 
         IonItem, 
         IonLabel, 
         IonList, 
         IonRefresher, 
         IonRefresherContent, 
         RefresherEventDetail } from '@ionic/react';
import { useEffect, useState } from 'react';
import './RobotsList.css';
import axios from 'axios';

interface RobotListItem {
  _id: string;
  name: string;
  image: string;
}

const RobotsList: React.FC = () => {

  const [robots, setRobots] = useState<RobotListItem[]>([]);

  const getRobotsData: () => Promise<RobotListItem[]> = async () => {
    const response = await axios.get(`https://w0244079-fullstack-o3nx.onrender.com/api/robots`)
    return response.data
  }

  //called when component first loads
  useEffect(() => {
      //get robots data
      (async () => {
        const data = await getRobotsData()
        setRobots(data)
      })()
  }, [])

  //called on every pull-to-refresh
  const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    const data = await getRobotsData()
    setRobots(data)
    event.detail.complete()
  }

  return (
    <>
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
      <IonList>
        {
          robots.map(robot => {
            return (
                <IonItem key={robot._id}>
                  <IonAvatar>
                    <IonImg alt={`Image of ${robot.name}`} src={robot.image} />
                  </IonAvatar>
                  <IonLabel>{robot.name}</IonLabel>
                </IonItem>
            )
          })
        }
      </IonList>
    </>
  );
};

export default RobotsList;
