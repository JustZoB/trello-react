import React from 'react';
import { useState } from 'react';
import { Header } from './Header.style';
import { Description } from './Description.style'
import { AddDescriptionButton } from './AddDescriptionButton.style';
import { AddDescriptionWrapper } from './AddDescriptionWrapper.style';
import { Comments } from './Comments.style'
import { AddCommentWrapper } from './AddCommentWrapper.style';
import { Button, ButtonsWrapper } from '../../../../Button.style';
import { CloseButton } from '../../../../CloseButton.style';
import { CloseModalButton } from '../../../../CloseModalButton.style';
import { Textarea } from '../../../../Textarea.style';
import { H3, H4 } from '../../../../H.style';
import { Modal, ModalContent } from '../../../../Modal.style';

interface CardModalProps {
  active: boolean,
  setActive: React.Dispatch<React.SetStateAction<boolean>>,
  colName: string,
  name: string
}

export const CardModal: React.FC<CardModalProps> = (props) => {
  const [descriptionActive, setDescriptionActive] = useState<boolean>(false);

  return (
    <Modal $isActive={props.active} onClick={() => props.setActive(false)}>
      <ModalContent onClick={(e: React.ChangeEvent) => e.stopPropagation()}>
          <Header>
            <H3>{props.name}</H3>
            <p>in column {props.colName}</p>
          </Header>

          <Description>
            <H4>Description</H4>

            <AddDescriptionButton
              $isActive={!descriptionActive}
              onClick={() => setDescriptionActive(true)}
            >
              Add description...
            </AddDescriptionButton>

            <AddDescriptionWrapper $isActive={descriptionActive}>
              <Textarea placeholder='Add description...' />
              <ButtonsWrapper>
                <Button>Save</Button>
                <CloseButton onClick={() => setDescriptionActive(false)}></CloseButton>
              </ButtonsWrapper>
            </AddDescriptionWrapper>
          </Description>

          <Comments>
            <H4>Comments</H4>
            <AddCommentWrapper>
              <Textarea placeholder='Write comment...' />
              <Button>Save</Button>
            </AddCommentWrapper>
          </Comments>

          <CloseModalButton onClick={() => props.setActive(false)}></CloseModalButton>
      </ModalContent>
    </Modal>
  );
}
