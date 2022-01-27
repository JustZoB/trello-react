import React from 'react';
import { useState } from 'react';
import { InputText } from '../InputText';
import { Button } from '../Button/Button';
import { Modal, ModalContent } from '../Modal';
import { Form } from '../Form/Form';

export const GreetingsModal: React.FC = () => {
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
          <Button type='submit' label='Enter' />
        </Form>
      </ModalContent>
    </Modal>
  );
}
