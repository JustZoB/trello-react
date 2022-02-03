import { useState } from 'react';
import styled from 'styled-components';
import { ICard, IColumn } from '../../interfaces';
import { Column } from '../Column';
import { GreetingsModal } from '../GreetingsModal';
import data from './../../data.json'

export const Board: React.FC = () => {
  const [list, setList] = useState<IColumn[]>(data);
  const [memberName, setMemberName] = useState<string>('');

  const addCard = (
    columnId: number,
    cardName: string
  ) => {
    const newCard = {
      id: Number(Date.now()),
      name: cardName
    }

    let mapped = list.map((column: IColumn) => {
      if (column.columnId === columnId) {
        return column.list === undefined ? [newCard] : [...column.list, newCard]
      }
    })

    console.log(mapped)
  }

  const deleteCard = (columnId: number, cardId: number) => {
    list.map((column: IColumn) => {
      if (column.columnId === columnId) {
        column.list = column.list?.filter((item : ICard) => item.id !== cardId);
      }
    })
  }

  const changeDescriptionCard = (
    columnId: number,
    cardId: number,
    description: string
  ) => {
    list.map((column: IColumn) => {
      if (column.columnId === columnId) {
        column.list?.map((item: ICard) => {
          if (item.id === cardId) {
            item.description = description
          }
        })
      }
    })
  }

  const addComment = (
    columnId: number,
    cardId: number,
    commentText: string
  ) => {
    const newComment = {
      id: Number(Date.now()),
      member: memberName,
      content: commentText,
    }

    list.map((column: IColumn) => {
      if (column.columnId === columnId) {
        column.list?.map((item: ICard) => {
          if (item.id === cardId) {
            if (item.comments === undefined) {
              item.comments = [newComment]
            } else {
              item.comments = [...item.comments, newComment]
            }
          }
        })
      }
    })
  }

  const handleSubmit = (name: string) => {
    setMemberName(name)
  }

  return (
    <StyledBoard>
      <ColumnList>
        {list.map(({columnId, name, list}) => (
          <Column
            key={columnId}
            columnId={columnId}
            name={name}
            list={list}
            memberName={memberName}
            addCard={addCard}
            deleteCard={deleteCard}
            changeDescriptionCard={changeDescriptionCard}
            addComment={addComment}
          />
        ))}
      </ColumnList>
      <GreetingsModal onSubmit={handleSubmit} />
    </StyledBoard>
  );
}

const StyledBoard = styled.div`
  padding: 10px;
  background-color: gray;
  min-width: calc(100vw - 20px);
  margin-top: 50px;
  margin-bottom: 50px;
  overflow-x: hidden;
`

const ColumnList = styled.div`
  display: flex;
  overflow-x: auto;
  height: calc(100% - 20px);
  padding-bottom: 20px;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    padding: 2px;
    height: 15px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 10px;
  }
`
