import React from 'react';
import styled from "styled-components";
import { useState } from 'react';
import { Button, ButtonsWrapper } from '../../Button';
import { CloseButton } from '../../CloseButton';
import { CloseModalButton } from '../../CloseModalButton';
import { Textarea } from '../../Textarea';
import { Modal, ModalContent } from '../../Modal';

export const CardModal: React.FC<CardModalProps> = (props) => {
  const [descriptionActive, setDescriptionActive] = useState<boolean>(false);

  return (
    <Modal $isActive={props.active} onClick={() => props.setActive(false)}>
      <ModalContent onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
          <Header>
            <h3>{props.name}</h3>
            <p>in column {props.colName}</p>
          </Header>

          <Description>
            <h4>Description</h4>

            <AddDescriptionButton
              $isActive={!descriptionActive}
              onClick={() => setDescriptionActive(true)}
            >
              Add description...
            </AddDescriptionButton>

            <AddDescriptionWrapper $isActive={descriptionActive}>
              <Textarea placeholder='Add description...' />
              <ButtonsWrapper>
                <Button label='Save' />
                <CloseButton onClick={() => setDescriptionActive(false)}></CloseButton>
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

          <CloseModalButton onClick={() => props.setActive(false)}></CloseModalButton>
      </ModalContent>
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
  display: ${(props) => (props.$isActive ? "block" : "none")};
`

const AddDescriptionButton = styled.div<thisProps>`
  display: ${(props) => (props.$isActive ? "block" : "none")};
  font-size: 14px;
  width: calc(100% - 20px);
  background-color: #EEEEEE;
  padding: 10px;
  height: 40px;
  cursor: pointer;
  margin: 10px 0 0;
  border-radius: 3px;

  &:hover {
    background-color: #DDDDDD;
  }
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
}

interface thisProps {
  $isActive: boolean;
}
