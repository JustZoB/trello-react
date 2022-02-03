import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, ButtonsWrapper } from '../../Button';
import { CloseButton } from '../../CloseButton';
import { Textarea } from '../../Textarea';

export const Comment: React.FC<Props> = ({columnId, cardId, commentId, commentText, commentMember, memberName, editComment, deleteComment}) => {
  const [editingCommentActive, setEditingCommentActive] = useState<boolean>(false);
  const [newCommentText, setNewCommentText] = useState<string>(commentText !== undefined ? commentText : '');
  const [oldCommentText, setOldCommentText] = useState<string>(commentText !== undefined ? commentText : '');

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentText(e.target.value)
  }

  const handleClickEditComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOldCommentText(newCommentText)
    setEditingCommentActive(true)
  }

  const handleClickSaveEditingComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    editComment(columnId, cardId, commentId, newCommentText)
    setNewCommentText(newCommentText)
    setEditingCommentActive(false)
  }

  const handleKeywordSaveEditingComment = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      editComment(columnId, cardId, commentId, newCommentText)
      setNewCommentText(newCommentText)
      setEditingCommentActive(false)
    }
  }

  const handleClickDontSaveDescription = (e: React.MouseEvent<HTMLDivElement>) => {
    setNewCommentText(oldCommentText)
    setEditingCommentActive(false)
  }

  const handleClickDeleteComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    deleteComment(columnId, cardId, commentId)
  }

  return (
    <CommentContent>
      <Member>{commentMember}</Member>
      {!editingCommentActive &&
        <CommentText>{commentText}</CommentText>
      }
      {memberName === commentMember && !editingCommentActive &&
        <ButtonsWrapper>
          <Button size='small' label='Edit' onClick={handleClickEditComment} />
          <Button size='small' label='Delete' onClick={handleClickDeleteComment} />
        </ButtonsWrapper>
      }
      {editingCommentActive &&
      <>
          <Textarea
            placeholder='Write comment...'
            value={newCommentText}
            onChange={handleChangeComment}
            onKeyPress={handleKeywordSaveEditingComment}
            autoFocus={true}
            onFocus={e => e.currentTarget.select()}
          />
          <ButtonsWrapper>
            <Button label='Save' onClick={handleClickSaveEditingComment} />
            <CloseButton onClick={handleClickDontSaveDescription} />
          </ButtonsWrapper>
        </>
      }
    </CommentContent>
  );
}

const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`

const Member = styled.div`
  font-weight: 600;
  margin-bottom: 2px;
`

const CommentText = styled.div`
  display: flex;
  margin-bottom: 5px;
`

interface Props {
  columnId: number,
  cardId: number,
  commentId: number,
  commentText: string,
  commentMember: string,
  memberName: string,
  editComment: (columnId: number, cardId: number, commentId: number, newCommentText: string) => void,
  deleteComment: (columnId: number, cardId: number, commentId: number) => void,
}