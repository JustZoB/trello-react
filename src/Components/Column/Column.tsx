import { useState } from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { AddCardButton } from './AddCardButton';
import { TextareaHead } from '../Textarea';
import { ICard } from '../../App';

export const Column: React.FC<Props> = ({name, list, memberName}) => {
  const [columnName, setColumnName] = useState<string>(name);
  const [columnList, setColumnList] = useState<ICard[]>(list !== undefined ? list : []);

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

  const deleteCard = (itemId: number) => {
    setColumnList(columnList.filter(item => item.id !== itemId))
  }

  const changeDescriptionCard = (itemId: number, description: string) => {
    console.log('changed')
    columnList.map((item: ICard) => {
      if (item.id === itemId) {
        item.description = description
      }
    })
  }

  const addComment = (itemId: number, commentText: string) => {
    const newComment = {
      id: Number(Date.now()),
      member: memberName,
      content: commentText,
    }

    columnList.map((item: ICard) => {
      if (item.id === itemId) {
        if (item.comments === undefined) {
          item.comments = [newComment]
        } else {
          item.comments = [...item.comments, newComment]
        }
      }
    })
  }

  return (
    <StyledColumn>
      <TextareaHead
        value={columnName}
        onChange={handleChange}
      >
        {name}
      </TextareaHead>

      {columnList.length !== 0 &&
        <CardList>
          {columnList.map(({id, name, description, comments}) => (
            <Card
              key={id}
              id={id}
              name={name}
              description={description}
              comments={comments}
              colName={columnName}
              deleteCard={deleteCard}
              changeDescriptionCard={changeDescriptionCard}
              addComment={addComment}
            />
          ))}
        </CardList>
      }

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

interface Props {
  id: number,
  name: string,
  list?: ICard[],
  memberName: string,
}
