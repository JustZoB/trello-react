import { useState } from 'react';
import { StyledCard } from '../StyledCard';
import { CardModal } from './CardModal';

export const Card: React.FC<CardProps> = ({colName, name}) => {
  const [modalActive, setModalActive] = useState<boolean>(false);

  return (
    <div>
      <StyledCard onClick={() => setModalActive(true)}>
        <p>{name}</p>
      </StyledCard>
      <CardModal
        active={modalActive}
        setActive={setModalActive}
        colName={colName}
        name={name}
      />
    </div>
  );
}

interface CardProps {
  colName: string,
  name: string
}
