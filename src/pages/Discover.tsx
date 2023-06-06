import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

type Props = {}

const Discover = (props: Props) => {
    const { id } = useParams();
    
    const [place, setPlace] = React.useState<any | undefined>(undefined);
    React.useEffect(() => {
        var place:any = {};
      
        return () => {
          setPlace({ name:"test"});
        }
      }, [id]);


  return (
    <div>Discover{id}</div>
  )
}

export default Discover