import { useState } from 'react';
import { StyledCard } from '../StyledCard';
import { CardModal } from './CardModal';
import { IComment } from '../../App';

export const Card: React.FC<CardProps> = ({colName, name, description, comments, memberName}) => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [cardName, setCardName] = useState<string>(name);

  const handleChange = (name: string) => {
    setCardName(name)
    console.log(name)
  }

  return (
    <div>
      <StyledCard onClick={() => setModalActive(true)}>
        <p>{cardName}</p>
      </StyledCard>
      <CardModal
        active={modalActive}
        setActive={setModalActive}
        colName={colName}
        name={cardName}
        onChangeCardName={handleChange}
        description={description}
        comments={comments}
        memberName={memberName}
      />
    </div>
  );
}

interface CardProps {
  colName: string,
  name: string,
  description?: string,
  comments?: IComment[],
  memberName: string,
}
