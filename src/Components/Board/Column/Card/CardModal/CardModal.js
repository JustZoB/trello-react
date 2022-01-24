import React from 'react';
import { useState } from 'react/cjs/react.development';
import { StyledCardModal } from './CardModal.style';
import { Button } from './../../../../Button.style';
import { CloseButton } from './../../../../CloseButton.style';
import { CloseModalButton } from './../../../../CloseModalButton.style';
import { Textarea } from './../../../../Textarea.style';
import { H3, H4 } from './../../../../H.style';
import { Modal, ModalContent } from './../../../../Modal.style';

const CardModal = ({active, setActive, colName, name}) => {
  const [descriptionActive, setDescriptionActive] = useState(false);
  const [commentsActive, setCommentsActive] = useState(false);

  return (
    <Modal className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <ModalContent className='modal__content' onClick={e => e.stopPropagation()}>
        <StyledCardModal>
          <div className='header'>
            <H3>{name}</H3>
            <p>in column {colName}</p>
          </div>
          <div className='description'>
            <H4>Description</H4>
            <p className={!descriptionActive ? "buttonEdit" : "buttonEdit hide"} onClick={() => setDescriptionActive(true)}>Add description...</p>
            <div className={descriptionActive ? "editDescription active" : "editDescription"}>
              <Textarea placeholder='Add description...'></Textarea>
              <div className='buttons'>
                <Button>Save</Button>
                <CloseButton onClick={() => setDescriptionActive(false)}></CloseButton>
              </div>
            </div>
          </div>
          <div className='comments'>
            <H4>Comments</H4>
            <div onClick={() => setCommentsActive(true)} className="comments__block">
              <Textarea placeholder='Write comment...'></Textarea>
              <Button className={commentsActive ? "button" : "button hide"}>Save</Button>
            </div>
          </div>
          <CloseModalButton onClick={() => setActive(false)}></CloseModalButton>
        </StyledCardModal>
      </ModalContent>
    </Modal>
  );
}

export default CardModal;
