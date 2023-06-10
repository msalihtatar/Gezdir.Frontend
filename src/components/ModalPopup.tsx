import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DiscoverDetail from './popups/DiscoverDetail';

function ModalPopup({placeId, children}:{placeId:number, children:any}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
    {children(() => handleShow())}

      <Modal show={show} onHide={handleClose} className="mx-auto my-5 " style={{ maxWidth: "23rem" }}>
        <DiscoverDetail placeId={placeId} />
      </Modal>
    </>
  );
}

export default ModalPopup;