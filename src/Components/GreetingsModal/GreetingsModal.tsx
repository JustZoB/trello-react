import React from 'react';
import { useState } from 'react';
import { InputText } from '../InputText.style';
import { InputButton } from '../Button.style';
import { Modal, ModalContent } from '../Modal.style';
import { Form } from '../Form.style';

const GreetingsModal = () => {
  const [modalActive, setModalActive] = useState<boolean>(true);
  const [name, setName] = useState<string>('');

  const enterName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name !== '') {
      setModalActive(false);
      console.log(name);
    }
  }

  return (
    <Modal $isActive={modalActive}>
      <ModalContent small>
        <h4>Hello and welcome to trello clone, enter you name:</h4>
        <Form onSubmit={(enterName)}>
          <InputText
            type='text'
            placeholder='Enter your name...' 
            value={name}
            onChange={(e: React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
          />
          <InputButton type='submit' value='Enter' />
        </Form>
      </ModalContent>
    </Modal>
  );
}

export default GreetingsModal;
