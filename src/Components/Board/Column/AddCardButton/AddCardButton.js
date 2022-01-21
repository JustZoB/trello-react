import { useState } from 'react/cjs/react.development';
import { StyledAddCardButton } from './AddCardButton.style';
import { Button } from './../../../Button.style'
import { CloseButton } from './../../../CloseButton.style'

function AddCardButton(props) {
  const [cardAddingActive, setCardAddingActive] = useState(false);

  return (
    <StyledAddCardButton onClick={event => console.log(event)}>
      <p
        className={!cardAddingActive ? "addButton" : "addButton hide"}
        onClick={() => setCardAddingActive(true)}
      >
        + Add card
      </p>
      <div className={cardAddingActive ? "addCard active" : "addCard"}>
        <textarea placeholder='Name your card'></textarea>
        <div className='buttons'>
          <Button>Add card</Button>
          <CloseButton onClick={() => setCardAddingActive(false)}></CloseButton>
        </div>
      </div>
    </StyledAddCardButton>
  );
}

export default AddCardButton;
