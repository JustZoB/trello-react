import React, { useState } from 'react';
import styled from "styled-components";
import { Button, ButtonsWrapper } from '../../Button.style';
import { CloseButton } from '../../CloseButton.style';
import { Textarea } from '../../Textarea.style';

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

const AddCardButtonActive = styled.p<AddCardProps>`
  display: ${(props) => (props.$isActive ? "flex" : "none")};
  align-items: center;
  padding: 10px;
  margin: 0;
  height: 14px;
  font-size: 14px;
  background-color: #DDDDDD;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #EEEEEE;
  }
`

interface AddCardProps {
  $isActive: boolean;
}