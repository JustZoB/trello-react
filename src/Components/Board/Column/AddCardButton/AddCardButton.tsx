import React, { useState } from 'react';
import { StyledAddCardButton } from './AddCardButton.style';
import { Button } from '../../../Button.style'
import { CloseButton } from '../../../CloseButton.style'
import { Textarea } from '../../../Textarea.style'

export const AddCardButton: React.FC = () => {
  const [cardAddingActive, setCardAddingActive] = useState<boolean>(false);

  return (
    <StyledAddCardButton onClick={(event: React.ChangeEvent) => console.log(event)}>
      <p
        className={!cardAddingActive ? "addButton" : "addButton hide"}
        onClick={() => setCardAddingActive(true)}
      >
        + Add card
      </p>
      <div className={cardAddingActive ? "addCard active" : "addCard"}>
        <Textarea placeholder='Name your card'></Textarea>
        <div className='buttons'>
          <Button>Add card</Button>
          <CloseButton onClick={() => setCardAddingActive(false)}></CloseButton>
        </div>
      </div>
    </StyledAddCardButton>
  );
}
