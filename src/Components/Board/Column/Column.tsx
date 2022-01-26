import { useState } from 'react';
import { StyledColumn } from './Column.style';
import { CardList } from './CardList.style';
import { Card } from './Card/Card'
import { AddCardButton } from './AddCardButton/AddCardButton';
import { TextareaHead } from '../../Textarea.style';

interface ColumnProps {
  key: number,
  colName: string,
  list: {
    id: number,
    name: string
  }[]
}

export const Column: React.FC<ColumnProps> = ({key, colName, list}) => {
  const [columnName, setColumnName] = useState<string>(colName);

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
        {colName}
      </TextareaHead>
      <CardList>
        {list.map(({id, name}) => (
          <Card
            key={id}
            name={name}
            colName={colName}
          />
        ))}
      </CardList>
      <AddCardButton />
    </StyledColumn>
  );
}
