import { StyledCard } from './Card.style';

function Card(props) {
  return (
    <StyledCard onClick={event => console.log(event)}>
      <p>{props.name}</p>
    </StyledCard>
  );
}

export default Card;
