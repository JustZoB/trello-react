import { useState } from 'react';
import { StyledCard } from '../StyledCard';
import { CardModal } from './CardModal';

export const Card: React.FC<CardProps> = ({colName, name, description, comments}) => {
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
        description={description}
        comments={comments}
      />
    </div>
  );
}

interface CardProps {
  colName: string,
  name: string,
  description?: string,
  comments?: {
    id: number,
    member: string,
    content: string,
  }[],
}
