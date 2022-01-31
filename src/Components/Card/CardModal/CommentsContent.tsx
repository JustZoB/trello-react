import React from 'react';
import styled from 'styled-components';
import { IComment } from '../../../App';

export const CommentsContent: React.FC<Props> = ({commets}) => {
  return (
    <StyledCommentsContent>
      {commets.map(({id, member, content}) => (
        <StyledComment key={id}>
          <Avatar title={member}>{member.charAt(0).toUpperCase()}</Avatar>
          <CommentContent>
            <Member>{member}</Member>
            <Comment>{content}</Comment>
          </CommentContent>
          
          <p></p>
        </StyledComment>
      ))}
    </StyledCommentsContent>
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

const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`

const Member = styled.div`
  font-weight: 600;
`

const Comment = styled.div`
  display: flex;
`

interface Props {
  commets: IComment[],
}
