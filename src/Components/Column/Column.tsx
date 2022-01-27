import { useState } from 'react';
import styled from "styled-components";
import { Card } from '../Card';
import { AddCardButton } from './AddCardButton';
import { TextareaHead } from '../Textarea';

interface ColumnProps {
  key: number,
  colName: string,
  list: {
    id: number,
    name: string
  }[]
}

export const Column: React.FC<ColumnProps> = ({colName, list}) => {
  const [columnName, setColumnName] = useState<string>(colName);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setColumnName(e.target.value)
  }

  return (
    <StyledColumn>
      <TextareaHead
        value={columnName}
        onChange={handleChange}
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
