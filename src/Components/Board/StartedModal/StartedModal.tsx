import React from 'react';
import { useState } from 'react';
import { InputText } from '../../InputText.style';
import { SubmitButton } from '../../Button.style';
import { Modal, ModalContent } from '../../Modal.style';
import { H4 } from '../../H.style';
import { Form } from '../../Form.style';

const StartedModal = () => {
  const [modalActive, setModalActive] = useState<boolean>(true);
  const [name, setName] = useState<string>('');

  const enterName = (e: any) => {
    e.preventDefault();

    if (name !== '') {
      setModalActive(false);
      console.log(name);
    }
  }

  return (
    <Modal $isActive={modalActive}>
      <ModalContent small>
        <H4>Hello and welcome to trello clone, enter you name:</H4>
        <Form onSubmit={(enterName)}>
          <InputText
            type='text'
            placeholder='Enter your name...' 
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
          <SubmitButton type='submit' value='Enter' />
        </Form>
      </ModalContent>
    </Modal>
  );
}

export default StartedModal;
