import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Button, ButtonsWrapper } from '../../Button/Button';
import { CloseButton } from '../../CloseButton';
import { CloseModalButton } from '../../CloseModalButton/CloseModalButton';
import { Textarea } from '../../Textarea';
import { Modal } from '../../Modal';
import { AddDescriptionButton } from './AddDescriptionButton';
import { DescriptionContent } from './DescriptionContent';

export const CardModal: React.FC<CardModalProps> = ({active, setActive, colName, name, description}) => {
  const [descriptionActive, setDescriptionActive] = useState<boolean>(false);
  const [descriptionText, setDescriptionText] = useState<string>(description !== undefined ? description : '');
  const [oldDescription, setOldDescription] = useState<string>(descriptionText);

  const handleClickCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    handleClickDontSaveDescription(e)
    setActive(false)
  }

  const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescriptionText(e.target.value)
  }

  const handleClickOpenAddingDescription = (e: React.MouseEvent<HTMLDivElement>) => {
    setOldDescription(descriptionText);
    setDescriptionActive(true)
  }

  const handleClickSaveDescription = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDescriptionActive(false)
  }

  const handleClickDontSaveDescription = (e: React.MouseEvent<HTMLDivElement>) => {
    setDescriptionText(oldDescription)
    setDescriptionActive(false)
  }

  return (
    <Modal
      $isActive={active}
      onClick={() => setActive(false)}
    >
      <Header>
        <h3>{name}</h3>
        <p>in column {colName}</p>
      </Header>

      <Description>
        <h4>Description</h4>

        <DescriptionContent
          $isActive={(descriptionText !== '') && !descriptionActive}
          description={descriptionText}
          onClick={handleClickOpenAddingDescription}
        />

        <AddDescriptionButton
          $isActive={(descriptionText === '') && !descriptionActive}
          description={descriptionText}
          onClick={handleClickOpenAddingDescription}
        />

        <AddDescriptionWrapper $isActive={descriptionActive}>
          <Textarea placeholder='Add description...' value={descriptionText} onChange={handleChangeDescription}/>
          <ButtonsWrapper>
            <Button label='Save' onClick={handleClickSaveDescription} />
            <CloseButton onClick={handleClickDontSaveDescription}></CloseButton>
          </ButtonsWrapper>
        </AddDescriptionWrapper>
      </Description>

      <Comments>
        <h4>Comments</h4>
        <AddCommentWrapper>
          <Textarea placeholder='Write comment...' />
          <Button label='Save' />
        </AddCommentWrapper>
      </Comments>

      <CloseModalButton onClick={handleClickCloseModal}></CloseModalButton>
    </Modal>
  );
}

const Header = styled.div`
  padding: 10px;

  > H3 {
    margin: 0 0 5px;
  }

  > p {
    margin: 0;
  }
`
const Description = styled.div`
  padding: 10px;

  Textarea {
    margin: 0 0 10px;
    height: 100px;
  }
`

const AddDescriptionWrapper = styled.div<thisProps>`
  display: ${(props) => (props.$isActive ? 'block' : 'none')};
`

const Comments = styled.div`
  padding: 10px;
`

const AddCommentWrapper = styled.div`
  background-color: #EEEEEE;
  padding-bottom: 10px;

  Textarea {
    margin: 0;
    outline: 0;
  }

  Button {
    width: fit-content;
    margin-left: 10px;
  }
`

interface CardModalProps {
  active: boolean,
  setActive: React.Dispatch<React.SetStateAction<boolean>>,
  colName: string,
  name: string,
  description?: string,
  comments?: {
    id: number,
    member: string,
    content: string,
  }[],
}

interface thisProps {
  $isActive: boolean;
}
