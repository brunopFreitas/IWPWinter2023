import './RocketList.css';
import React, { useEffect, useState } from 'react';
import { IonItem, IonLabel, IonList } from '@ionic/react';

const RocketList: React.FC = () => {

  const [rockets, setRockets] = useState<any[]>([]);

  const RocketsData = [
    {
      name: "Falcon 1"
    },
    {
      name: "Starship"
    }
  ]

  useEffect(() => {
    setRockets(RocketsData)
  }, [])

  return (
    <IonList>
    {
      rockets.map(rocket => {
        return (
            <IonItem>
              <IonLabel>{rocket.name}</IonLabel>
            </IonItem>
        )
      })
    }
    </IonList>
  );
};

export default RocketList;
