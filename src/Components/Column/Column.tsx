import { useState } from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { AddCardButton } from './AddCardButton';
import { TextareaHead } from '../Textarea';
import { ICard, IList } from '../../App';

export const Column: React.FC<IList> = ({name, list}) => {
  const [columnName, setColumnName] = useState<string>(name);
  const [columnList, setColumnList] = useState<ICard[]>(list);
  const colName: string = name;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setColumnName(e.target.value)
  }

  const addCard = (name: string) => {
    const newCard = {
      id: Number(Date.now()),
      name: name
    }

    setColumnList([...columnList, newCard]);
  }

  return (
    <StyledColumn>
      <TextareaHead
        value={columnName}
        onChange={handleChange}
      >
        {name}
      </TextareaHead>
      <CardList>
        {columnList.map(({id, name, description, comments}) => (
          <Card
            key={id}
            name={name}
            description={description}
            comments={comments}
            colName={colName}
          />
        ))}
      </CardList>
      <AddCardButton addCard={addCard} />
    </StyledColumn>
  );
}

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
  min-width: 300px;
  height: fit-content;
  background-color: lightgray;
  border-radius: 7px;
  max-height: calc(100% - 15px);

  &:not(:last-child) {
    margin-right: 10px;
  }

  & > * {
    padding: 0 5px;
  }
`

const CardList = styled.div`
  overflow-y: auto;
  margin-bottom: 10px;
  padding-bottom: 2px;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }

  &::-webkit-scrollbar {
    padding-right: 10px;
    padding: 2px;
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 10px;
  }
`
