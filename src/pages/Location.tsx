import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import DiscoverDetail from '../components/popups/DiscoverDetail';

type Props = {}

const Location = (props: Props) => {
    const { id } = useParams();
    
    const [place, setPlace] = React.useState<{name:string} | undefined>(undefined);
    React.useEffect(() => {
        var place:any = {};
      
        return () => {
          setPlace({ name:"test"});
        }
      }, [id]);


  return (
    <>
    <div>Location : {id} {place?.name??"Yükleniyor"}</div>
    
      <DiscoverDetail placeId={Number(id)}/>
    </>

  )
}

export default Location