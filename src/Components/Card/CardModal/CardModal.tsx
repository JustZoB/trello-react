import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Button, ButtonsWrapper } from '../../Button/Button';
import { CloseButton } from '../../CloseButton';
import { CloseModalButton } from '../../CloseModalButton/CloseModalButton';
import { Textarea, TextareaHead } from '../../Textarea';
import { Modal } from '../../Modal';
import { AddDescriptionButton } from './AddDescriptionButton';
import { DescriptionContent } from './DescriptionContent';
import { CommentsContent } from './CommentsContent';
import { IComment } from '../../../interfaces';

export const CardModal: React.FC<CardModalProps> = ({
    active,
    setActive,
    cardId,
    columnId,
    colName,
    name,
    description,
    comments,
    memberName,
    onChangeCardName,
    deleteCard,
    changeDescriptionCard,
    addComment,
    editComment,
    deleteComment
  }) => {
  const [descriptionActive, setDescriptionActive] = useState<boolean>(false);
  const [newDescription, setNewDescription] = useState<string>(description !== undefined ? description : '');
  const [oldDescription, setOldDescription] = useState<string>(description !== undefined ? description : '');
  const [commentText, setCommentText] = useState<string>('');

  const handleClickCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    setNewDescription(oldDescription)
    setDescriptionActive(false)
    setActive(false)
  }

  const escapeCloseModal = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setNewDescription(oldDescription)
      setDescriptionActive(false)
      setActive(false)
    }
  }, [oldDescription, setActive]);

  useEffect(() => {
    window.addEventListener("keydown", escapeCloseModal);

    return () => {
      window.removeEventListener("keydown", escapeCloseModal);
    }
  }, [escapeCloseModal])

  const handleChangeCardName = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeCardName(e.target.value)
  }

  const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewDescription(e.target.value)
  }

  const handleClickOpenAddingDescription = (e: React.MouseEvent<HTMLDivElement>) => {
    setOldDescription(newDescription)
    setDescriptionActive(true)
  }

  const handleClickSaveDescription = (e: React.MouseEvent<HTMLButtonElement>) => {
    changeDescriptionCard(columnId, cardId, newDescription)
    setNewDescription(newDescription)
    setDescriptionActive(false)
  }

  const handleKeywordSaveDescription = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      changeDescriptionCard(columnId, cardId, newDescription)
      setNewDescription(newDescription)
      setDescriptionActive(false)
    }
  }

  const handleClickDontSaveDescription = (e: React.MouseEvent<HTMLDivElement>) => {
    setNewDescription(oldDescription)
    setDescriptionActive(false)
  }

  const handleClickDeleteCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    deleteCard(columnId, cardId)
    setDescriptionActive(false)
  }

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value)
  }

  const handleClickAddComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    addComment(columnId, cardId, commentText);
    setCommentText('')
  }

  const handleKeywordAddComment = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addComment(columnId, cardId, commentText);
      setCommentText('')
    }
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

        {(newDescription !== '' && newDescription !== undefined) && !descriptionActive &&
          <DescriptionContent
            description={newDescription}
            onClick={handleClickOpenAddingDescription}
          />
        }

        {(newDescription === '' || newDescription === undefined) && !descriptionActive &&
          <AddDescriptionButton
            description={newDescription}
            onClick={handleClickOpenAddingDescription}
          />
        }

        {descriptionActive &&
          <AddDescriptionWrapper>
            <Textarea
              placeholder='Add description...'
              value={newDescription}
              onChange={handleChangeDescription}
              onKeyPress={handleKeywordSaveDescription}
              autoFocus={true}
              onFocus={e => e.currentTarget.select()}
            />
            <ButtonsWrapper>
              <Button label='Save' onClick={handleClickSaveDescription} />
              <CloseButton onClick={handleClickDontSaveDescription} />
            </ButtonsWrapper>
          </AddDescriptionWrapper>
        }
        
      </Description>

      <Comments>
        <h4>Comments</h4>
        <AddCommentWrapper>
          <Textarea
            placeholder='Write comment...'
            value={commentText}
            onChange={handleChangeComment}
            onKeyPress={handleKeywordAddComment}
          />
          <Button label='Post' onClick={handleClickAddComment} />
        </AddCommentWrapper>
        <CommentsContent
          columnId={columnId}
          cardId={cardId}
          comments={comments}
          memberName={memberName}
          editComment={editComment}
          deleteComment={deleteComment}
        />
      </Comments>

      <Button label='Delete this card' onClick={handleClickDeleteCard} />

      <CloseModalButton onClick={handleClickCloseModal} />
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

const AddDescriptionWrapper = styled.div`
  display: block;
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
  cardId: number,
  columnId: number,
  colName: string,
  name: string,
  description?: string,
  comments?: IComment[],
  memberName: string,
  onChangeCardName: (cardName: string) => void,
  deleteCard: (columnId: number, cardId: number) => void,
  changeDescriptionCard: (columnId: number, cardId: number, descriptionCard: string) => void,
  addComment: (columnId: number, cardId: number, commentText: string) => void,
  editComment: (columnId: number, cardId: number, commentId: number, newCommentText: string) => void,
  deleteComment: (columnId: number, cardId: number, commentId: number) => void,
}
