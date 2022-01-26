import { useState } from 'react';
import { StyledCard } from '../StyledCard.style';
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

interface CardProps {
  colName: string,
  name: string
}
