import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const ModalCustom = (props) => {
  const {
    className,
    isShow,
    children,
    labelSubmit,
    labelCancel,
    onSubmitModal,
    onClosedModal
  } = props;

  const [modal, setModal] = useState(isShow);
  const toggle = () => setModal(!modal);
  const firstUpdate = useRef(true);

  useEffect(() => {
    if(firstUpdate.current){
      firstUpdate.current = false;
      return;
    }

    toggle();

  }, [isShow])

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onSubmitModal}>{labelSubmit}</Button>{' '}
          <Button color="secondary" onClick={toggle}>{labelCancel}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default ModalCustom;