import { StyledColumn } from './Column.style';
import Card from './Card/Card'
import AddCardButton from './AddCardButton/AddCardButton';

function Column(props) {
  return (
    <StyledColumn>
      <textarea>{props.name}</textarea>
      <div className='cardList'>
        {props.list.map(col => (
          <Card key={col.id} name={col.name}></Card>
        ))}
      </div>
      <AddCardButton></AddCardButton>
    </StyledColumn>
  );
}

export default Column;
