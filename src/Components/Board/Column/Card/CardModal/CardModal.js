import React from 'react';
import { useState } from 'react/cjs/react.development';
import { StyledCardModal } from './CardModal.style';
import { Button } from './../../../../Button.style';
import { CloseButton } from './../../../../CloseButton.style';

const CardModal = ({active, setActive, colName, name}) => {
  const [descriptionActive, setDescriptionActive] = useState(false);
  const [commentsActive, setCommentsActive] = useState(false);

  return (
    <StyledCardModal className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className='modal__content' onClick={e => e.stopPropagation()}>
        <div className='header'>
          <h3>{name}</h3>
          <p>in column {colName}</p>
        </div>
        <div className='description'>
          <h4>Description</h4>
          <p className={!descriptionActive ? "buttonEdit" : "buttonEdit hide"} onClick={() => setDescriptionActive(true)}>Add description...</p>
          <div className={descriptionActive ? "editDescription active" : "editDescription"}>
            <textarea placeholder='Add description...'></textarea>
            <div className='buttons'>
              <Button>Save</Button>
              <CloseButton onClick={() => setDescriptionActive(false)}></CloseButton>
            </div>
          </div>
        </div>
        <div className='comments'>
          <h4>Comments</h4>
          <div onClick={() => setCommentsActive(true)} className="comments__block">
            <textarea placeholder='Write comment...'></textarea>
            <Button className={commentsActive ? "button" : "button hide"}>Save</Button>
          </div>
        </div>
        <div className='closeIcon' onClick={() => setActive(false)}></div>
      </div>
    </StyledCardModal>
  );
}

export default CardModal;
