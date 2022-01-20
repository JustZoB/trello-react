import { StyledAddCardButton } from './AddCardButton.style';

function AddCardButton(props) {
  return (
    <StyledAddCardButton onClick={event => console.log(event)}>
      <p>+ Add card</p>
    </StyledAddCardButton>
  );
}

export default AddCardButton;
