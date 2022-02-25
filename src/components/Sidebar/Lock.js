import { useModalState } from "Hooks/Customhooks";
import React from "react";
import { Button } from "rsuite";
import Modal from "rsuite/esm/Overlay/Modal";
//import styles from "./Lock.scss";

const Lock = () => {
  const { isOpen, open, close } = useModalState();

  return (
    <>
      <div>
        <Button onClick={open}>Lock</Button>
      </div>
      <div>
        <Modal show={isOpen} onHide={close}>
          <Modal.Header>
            <Modal.Title>Enter your pin</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <Button>Unlock</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Lock;
