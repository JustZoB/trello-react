import { useState } from 'react/cjs/react.development';
import { StyledCard } from './Card.style';
import CardModal from './CardModal/CardModal';

function Card(props) {
  const [modalActive, setModalActive] = useState(false);

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

export default Card;
