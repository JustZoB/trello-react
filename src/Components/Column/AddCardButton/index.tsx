import React, { useState } from 'react';
import styled from "styled-components";
import { StyledCard } from '../../StyledCard';
import { Button, ButtonsWrapper } from '../../Button';
import { CloseButton } from '../../CloseButton';
import { Textarea } from '../../Textarea';

export const AddCardButton: React.FC = () => {
  const [cardAddingActive, setCardAddingActive] = useState<boolean>(false);

  return (
    <div>
      <StyledCard
        variant='secondary'
        $isActive= {!cardAddingActive}
        onClick={() => setCardAddingActive(true)}
      >
        + Add card
      </StyledCard>
      <AddingCardWrapper $isActive= {cardAddingActive}>
        <Textarea placeholder='Name your card' />
        <ButtonsWrapper>
          <Button label='Add card' />
          <CloseButton onClick={() => setCardAddingActive(false)}></CloseButton>
        </ButtonsWrapper>
      </AddingCardWrapper>
    </div>
  );
}

const AddingCardWrapper = styled.div<AddCardProps>`
  display: ${(props) => (props.$isActive ? "block" : "none")};

  Textarea {
    margin: 0 0 10px;
    padding: 10px;
    background-color: white;
    width: calc(100% - 20px);
    height: 50px;
    outline: 0;
  }
`

interface AddCardProps {
  $isActive: boolean;
}