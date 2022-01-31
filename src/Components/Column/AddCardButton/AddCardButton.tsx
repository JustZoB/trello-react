import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledCard } from '../../StyledCard';
import { Button, ButtonsWrapper } from '../../Button/Button';
import { CloseButton } from '../../CloseButton';
import { Textarea } from '../../Textarea';

export const AddCardButton: React.FC<AddCardButtonProps> = ({addCard}) => {
  const [cardAddingActive, setCardAddingActive] = useState<boolean>(false);
  const [newCardName, setNewCardName] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewCardName(e.target.value)
  }

  const handleClickAddCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (newCardName !== '') {
      addCard(newCardName)
      setNewCardName('')
    }
  }

  const handleClickCloseAdding = (e: React.MouseEvent<HTMLDivElement>) => {
    setCardAddingActive(false)
    setNewCardName('')
  }

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
        <Textarea placeholder='Name your card' value={newCardName} onChange={handleChange} />
        <ButtonsWrapper>
          <Button label='Add card' onClick={handleClickAddCard} />
          <CloseButton onClick={handleClickCloseAdding}></CloseButton>
        </ButtonsWrapper>
      </AddingCardWrapper>
    </div>
  );
}

const AddingCardWrapper = styled.div<AddCardProps>`
  display: ${(props) => (props.$isActive ? 'block' : 'none')};

  Textarea {
    margin: 0 0 10px;
    padding: 10px;
    background-color: white;
    width: calc(100% - 20px);
    height: 50px;
    outline: 0;
  }
`

interface AddCardButtonProps {
  addCard: (name: string) => void,
}

interface AddCardProps {
  $isActive: boolean,
}