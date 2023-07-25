import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
export function ModalWin({Show, showText, onClose}) {
 
  //const handleShow = () => setShow(true);

  return (
    <>
      

      <Modal show={Show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>{showText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
