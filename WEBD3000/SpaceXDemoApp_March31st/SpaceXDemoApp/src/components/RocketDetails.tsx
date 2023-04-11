import { useEffect, useState } from 'react';
import './RocketDetails.css';
import axios from 'axios';
import { IonCard, 
          IonCardContent, 
          IonCardHeader, 
          IonCardSubtitle, 
          IonCardTitle, 
          IonImg } from '@ionic/react';

interface RocketDetailsProps {
  id: string;
}

interface RocketDetails {
  id: string;
  name: string;
  description: string;
  country: string;
  flickr_images: string[];
}

const RocketDetails: React.FC<RocketDetailsProps> = ({ id }) => {

  console.log(id)

  const [rocketDetails, setRocketDetails] = useState<RocketDetails>();

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://api.spacexdata.com/v4/rockets/${ id }`)
      console.log(response.data)
      setRocketDetails(response.data)
    })()
  }, [])

  return (
    <IonCard>
      <IonImg alt={rocketDetails?.name} 
              src={rocketDetails?.flickr_images[0]}></IonImg>
      <IonCardHeader>
        <IonCardTitle>{ rocketDetails?.name}</IonCardTitle>
        <IonCardSubtitle>{rocketDetails?.country}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        {rocketDetails?.description}
      </IonCardContent>
    </IonCard>
  );
};

export default RocketDetails;
