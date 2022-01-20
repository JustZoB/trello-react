import React from 'react';
import { StyledCardModal } from './CardModal.style';

const CardModal = ({active, setActive, colName, name}) => {
  return (
    <StyledCardModal className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className='modal__content' onClick={e => e.stopPropagation()}>
        <div className='header'>
          <h3>{name}</h3>
          <p>in column {colName}</p>
        </div>
        <div className='description'>
          <h4>Description</h4>
        </div>
        <div className='comments'>
          <h4>Comments</h4>
        </div>
        <div className='closeIcon'></div>
      </div>
    </StyledCardModal>
  );
}

export default CardModal;
