import { useState } from 'react/cjs/react.development';
import { StyledColumn } from './Column.style';
import Card from './Card/Card'
import AddCardButton from './AddCardButton/AddCardButton';
import { TextareaHead } from './../../Textarea.style';

function Column(props) {
  const [name, setNewName] = useState(props.name);

  return (
    <StyledColumn>
      <TextareaHead name="name" value={name} onChange={e => setNewName(e.target.value)}>{name}</TextareaHead>
      <div className='cardList'>
        {props.list.map(col => (
          <Card key={col.id} name={col.name} colName={props.name}></Card>
        ))}
      </div>
      <AddCardButton></AddCardButton>
    </StyledColumn>
  );
}

export default Column;
