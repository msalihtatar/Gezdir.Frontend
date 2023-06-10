import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import DiscoverDetail from '../components/popups/DiscoverDetail';
import ModalPopup from '../components/popups/ModalPopupDiscover';

type Props = {}

const Location = (props: Props) => {
    const { id } = useParams();
    
  return (
    <>   
        <ModalPopup placeId={Number(id)}>
            {(handleShow:any) => (
                // this is a valid React element that uses handleShow
                <div onClick={() => handleShow()}>Click me</div>
            )} 
        </ModalPopup> 
    </>
  )
}

export default Location