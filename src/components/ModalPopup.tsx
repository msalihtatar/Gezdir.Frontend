import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DiscoverDetail from './popups/DiscoverDetail';
import { Container } from 'react-bootstrap';

function ModalPopup({placeId, children}:{placeId:number, children:any}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
    {children(() => handleShow())}

      <Container>
        <Modal show={show} onHide={handleClose} className="centered-modal" centered>
            <div className="map-card-border">
            <DiscoverDetail placeId={placeId} />
        </div>
        </Modal>
        </Container>
    </>
  );
}

export default ModalPopup;