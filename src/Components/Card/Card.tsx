import { useState } from 'react';
import styled from "styled-components";
import { CardModal } from './CardModal/CardModal';

export const Card: React.FC<CardProps> = (props) => {
  const [modalActive, setModalActive] = useState<boolean>(false);

  return (
    <div>
      <StyledCard onClick={() => setModalActive(true)}>
        <p>{props.name}</p>
      </StyledCard>
      <CardModal
        active={modalActive}
        setActive={setModalActive}
        colName={props.colName}
        name={props.name}
      />
    </div>
  );
}

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 14px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 2px 0 0 rgba(34, 60, 80, 0.2);
  cursor: pointer;

  &:hover {
    background-color: aliceblue;
  }
`

interface CardProps {
  colName: string,
  name: string
}
