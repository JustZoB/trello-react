import React from 'react';
import { useState } from 'react';
import { StyledCardModal } from './CardModal.style';
import { Button } from '../../../../Button.style';
import { CloseButton } from '../../../../CloseButton.style';
import { CloseModalButton } from '../../../../CloseModalButton.style';
import { Textarea } from '../../../../Textarea.style';
import { H3, H4 } from '../../../../H.style';
import { Modal, ModalContent } from '../../../../Modal.style';

interface CardModalProps {
  active: boolean,
  setActive: any,
  colName: string,
  name: string
}

export const CardModal: React.FC<CardModalProps> = (props) => {
  const [descriptionActive, setDescriptionActive] = useState<boolean>(false);
  const [commentsActive, setCommentsActive] = useState<boolean>(false);

  return (
    <Modal className={props.active ? "modal active" : "modal"} onClick={() => props.setActive(false)}>
      <ModalContent className='modal__content' onClick={(e: React.ChangeEvent) => e.stopPropagation()}>
        <StyledCardModal>
          <div className='header'>
            <H3>{props.name}</H3>
            <p>in column {props.colName}</p>
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
          <CloseModalButton onClick={() => props.setActive(false)}></CloseModalButton>
        </StyledCardModal>
      </ModalContent>
    </Modal>
  );
}
