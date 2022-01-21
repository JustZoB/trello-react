import React from 'react';
import { useState } from 'react/cjs/react.development';
import { StyledStartedModal } from './StartedModal.style';

const StartedModal = () => {
  const [modalActive, setModalActive] = useState(true);
  const [name, setName] = useState("");

  const enterName = (e) => {
    e.preventDefault();

    if (name !== "") {
      setModalActive(false);
      console.log(name);
    }
  }

  return (
    <StyledStartedModal className={modalActive ? "modal active" : "modal"}>
      <div className='modal__content'>
        <h4>Hello and welcome to trello clone, enter you name:</h4>
        <form onSubmit={(enterName)}>
          <input
            type='text'
            placeholder='Enter your name...' 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type='submit' value='Enter' />
        </form>
      </div>
    </StyledStartedModal>
  );
}

export default StartedModal;
