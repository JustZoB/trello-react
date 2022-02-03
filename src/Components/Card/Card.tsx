import { useState } from 'react';
import { IComment } from '../../interfaces';
import { StyledCard } from '../StyledCard';
import { CardModal } from './CardModal';

export const Card: React.FC<CardProps> = ({id, columnId, colName, name, description, comments, deleteCard, changeDescriptionCard, addComment}) => {
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
          columnId={columnId}
          colName={colName}
          name={cardName}
          onChangeCardName={handleChange}
          description={description}
          comments={comments}
          deleteCard={deleteCard}
          changeDescriptionCard={changeDescriptionCard}
          addComment={addComment}
        />
      }
    </div>
  );
}

interface CardProps {
  colName: string,
  id: number,
  columnId: number,
  name: string,
  description?: string,
  comments?: IComment[],
  deleteCard: (columnId: number, cardId: number) => void,
  changeDescriptionCard: (columnId: number, cardId: number, descriptionCard: string) => void,
  addComment: (columnId: number, cardId: number, commentText: string) => void,
}
