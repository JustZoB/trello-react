import { useState } from 'react';
import { StyledColumn } from './Column.style';
import { Card } from './Card/Card'
import { AddCardButton } from './AddCardButton/AddCardButton';
import { TextareaHead } from '../../Textarea.style';

interface ColumnProps {
  key: number,
  name: string,
  list: [
    {
      id: number,
      name: string
    }
  ]
}

export const Column: React.FC<ColumnProps> = (props) => {
  const [columnName, setColumnName] = useState<string>(props.name);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColumnName(event.target.value)
  }

  return (
    <StyledColumn>
      <TextareaHead
        name="name"
        value={columnName}
        onChange={changeHandler}
      >
        {props.name}
      </TextareaHead>
      <div className='cardList'>
        {props.list.map(col => (
          <Card
            key={col.id}
            name={col.name}
            colName={props.name}
          />
        ))}
      </div>
      <AddCardButton></AddCardButton>
    </StyledColumn>
  );
}
