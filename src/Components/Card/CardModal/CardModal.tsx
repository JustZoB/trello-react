import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Button, ButtonsWrapper } from '../../Button/Button';
import { CloseButton } from '../../CloseButton';
import { CloseModalButton } from '../../CloseModalButton/CloseModalButton';
import { Textarea, TextareaHead } from '../../Textarea';
import { Modal } from '../../Modal';
import { AddDescriptionButton } from './AddDescriptionButton';
import { DescriptionContent } from './DescriptionContent';
import { IComment } from '../../../App';
import { CommentsContent } from './CommentsContent';

export const CardModal: React.FC<CardModalProps> = ({active, setActive, id, colName, name, description, comments, memberName, onChangeCardName, deleteCard, changeDescriptionCard}) => {
  const [descriptionActive, setDescriptionActive] = useState<boolean>(false);
  const [newDescription, setNewDescription] = useState<string>(description !== undefined ? description : '');
  const [oldDescription, setOldDescription] = useState<string>(description !== undefined ? description : '');
  const [commentText, setCommentText] = useState<string>('');
  const [commentsList, setCommentsList] = useState<IComment[]>(comments !== undefined ? comments : []);

  const handleChangeCardName = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeCardName(e.target.value)
  }

  const handleClickCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    handleClickDontSaveDescription(e)
    setActive(false)
  }

  const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewDescription(e.target.value)
  }

  const handleClickOpenAddingDescription = (e: React.MouseEvent<HTMLDivElement>) => {
    setOldDescription(newDescription);
    setDescriptionActive(true)
  }

  const handleClickSaveDescription = (e: React.MouseEvent<HTMLButtonElement>) => {
    changeDescriptionCard(id, newDescription)
    setNewDescription(newDescription)
    setDescriptionActive(false)
  }

  const handleClickDontSaveDescription = (e: React.MouseEvent<HTMLDivElement>) => {
    setNewDescription(oldDescription)
    setDescriptionActive(false)
  }

  const handleClickDeleteCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    deleteCard(id)
    setDescriptionActive(false)
  }

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value)
  }

  const handleClickAddComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newComment = {
      id: Number(Date.now()),
      member: memberName,
      content: commentText,
    }

    setCommentsList([...commentsList, newComment]);
    setCommentText('')
  }

  return (
    <Modal
      $isActive={active}
      onClick={() => setActive(false)}
    >
      <Header>
        <TextareaHead
          value={name}
          onChange={handleChangeCardName}
        >
          {name}
        </TextareaHead>
        <p>in column {colName}</p>
      </Header>

      <Description>
        <h4>Description</h4>

        <DescriptionContent
          $isActive={(newDescription !== '' && newDescription !== undefined) && !descriptionActive}
          description={newDescription}
          onClick={handleClickOpenAddingDescription}
        />

        <AddDescriptionButton
          $isActive={(newDescription === '' || newDescription === undefined) && !descriptionActive}
          description={newDescription}
          onClick={handleClickOpenAddingDescription}
        />

        <AddDescriptionWrapper $isActive={descriptionActive}>
          <Textarea placeholder='Add description...' value={description} onChange={handleChangeDescription} />
          <ButtonsWrapper>
            <Button label='Save' onClick={handleClickSaveDescription} />
            <CloseButton onClick={handleClickDontSaveDescription}></CloseButton>
          </ButtonsWrapper>
        </AddDescriptionWrapper>
      </Description>

      <Comments>
        <h4>Comments</h4>
        <AddCommentWrapper>
          <Textarea placeholder='Write comment...' value={commentText} onChange={handleChangeComment} />
          <Button label='Post' onClick={handleClickAddComment} />
        </AddCommentWrapper>
        <CommentsContent commets={commentsList} />
      </Comments>

      <Button label='Delete this card' onClick={handleClickDeleteCard} />

      <CloseModalButton onClick={handleClickCloseModal}></CloseModalButton>
    </Modal>
  );
}

const Header = styled.div`
  margin-top: 10px;

  > textarea {
    margin: 0 0 0 5px;
    width: calc(100% - 60px);
  }

  > p {
    margin-left: 10px;
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
  id: number,
  colName: string,
  name: string,
  description?: string,
  comments?: IComment[],
  memberName: string,
  onChangeCardName: (name: string) => void,
  deleteCard: (id: number) => void,
  changeDescriptionCard: (id: number, description: string) => void,
}

interface thisProps {
  $isActive: boolean;
}
