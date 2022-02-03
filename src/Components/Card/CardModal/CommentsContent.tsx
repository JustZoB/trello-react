import React from 'react';
import styled from 'styled-components';
import { IComment } from '../../../interfaces';
import { Comment } from './Comment'

export const CommentsContent: React.FC<Props> = ({columnId, cardId, comments, memberName, editComment, deleteComment}) => {
  return (
    <>
    {(comments !== undefined && comments.length !== 0) &&
      <StyledCommentsContent>
        {comments.map(({id, member, content}) => (
          <StyledComment key={id}>
            <Avatar title={member}>{member.charAt(0).toUpperCase()}</Avatar>
            <Comment
              columnId={columnId}
              cardId={cardId}
              commentId={id}
              commentMember={member}
              commentText={content}
              memberName={memberName}
              editComment={editComment}
              deleteComment={deleteComment}
            />
            <p></p>
          </StyledComment>
        ))}
      </StyledCommentsContent>
    }
    </>
  );
}

const StyledCommentsContent = styled.div`
  font-size: 14px;
  width: 100%;
  background-color: white;
  margin: 10px 0 0;
`

const StyledComment = styled.div`
  display: flex;
  padding: 10px 0;
`

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #DDDDDD;
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  cursor: default;
`

interface Props {
  columnId: number,
  cardId: number,
  comments?: IComment[],
  memberName: string,
  editComment: (columnId: number, cardId: number, commentId: number, newCommentText: string) => void,
  deleteComment: (columnId: number, cardId: number, commentId: number) => void,
}
