import React, { useState } from 'react';
import { AddCardButtonActive } from './AddCardButtonActive.style';
import { AddingCardWrapper } from './AddingCardWrapper.style';
import { Button, ButtonsWrapper } from '../../../Button.style'
import { CloseButton } from '../../../CloseButton.style'
import { Textarea } from '../../../Textarea.style'

export const AddCardButton: React.FC = () => {
  const [cardAddingActive, setCardAddingActive] = useState<boolean>(false);

  return (
    <div>
      <AddCardButtonActive
        $isActive= {!cardAddingActive}
        onClick={() => setCardAddingActive(true)}
      >
        + Add card
      </AddCardButtonActive>
      <AddingCardWrapper $isActive= {cardAddingActive}>
        <Textarea placeholder='Name your card' />
        <ButtonsWrapper>
          <Button>Add card</Button>
          <CloseButton onClick={() => setCardAddingActive(false)}></CloseButton>
        </ButtonsWrapper>
      </AddingCardWrapper>
    </div>
  );
}
