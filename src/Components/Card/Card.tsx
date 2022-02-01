import { useState } from 'react';
import { StyledCard } from '../StyledCard';
import { CardModal } from './CardModal';
import { IComment } from '../../App';

export const Card: React.FC<CardProps> = ({id, colName, name, description, comments, memberName, deleteCard, changeDescriptionCard}) => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [cardName, setCardName] = useState<string>(name);

  const handleChange = (name: string) => {
    setCardName(name)
  }

  return (
    <div>
      <StyledCard onClick={() => setModalActive(true)}>
        <p>{cardName}</p>
      </StyledCard>
      {modalActive &&
        <CardModal
          active={modalActive}
          setActive={setModalActive}
          id={id}
          colName={colName}
          name={cardName}
          onChangeCardName={handleChange}
          description={description}
          comments={comments}
          memberName={memberName}
          deleteCard={deleteCard}
          changeDescriptionCard={changeDescriptionCard}
        />
      }
    </div>
  );
}

interface CardProps {
  colName: string,
  id: number,
  name: string,
  description?: string,
  comments?: IComment[],
  memberName: string,
  deleteCard: (id: number) => void,
  changeDescriptionCard: (id: number, description: string) => void,
}
