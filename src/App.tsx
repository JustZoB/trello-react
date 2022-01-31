import React from 'react'
import styled from 'styled-components';
import { Board } from './Components/Board';

const App: React.FC = () => {
  const list: IList[] = [
    {
      id: 1,
      name: "ToDo",
      list: [
        { id: 1, name: "Vacuum" },
        { id: 2, name: "Bath" },
        { id: 3, name: "Shop" },
        { id: 4, name: "Shop" },
        { id: 5, name: "Shop" },
        { id: 6, name: "Shop" },
        { id: 7, name: "Shop" },
        { id: 8, name: "Shop" },
        { id: 9, name: "Shop" },
        { id: 10, name: "Shop" },
        { id: 11, name: "Shop" },
        { id: 12, name: "Shop" },
        { id: 13, name: "Shop" },
        { id: 14, name: "Shop" },
        { id: 15, name: "Shop" },
        { id: 16, name: "Shop" }
      ]
    },
    {
      id: 2,
      name: "Progress",
      list: [
        { id: 1,  name: "Work" }
      ]
    },
    {
      id: 3,
      name: "Testing",
      list: [
        { id: 1, name: "Testing" }
      ]
    },
    {
      id: 4,
      name: "Done",
      list: [
        { id: 1, name: "Sleep" }
      ]
    }
  ]

  return (
    <AppContainer>
      <Board list={list} />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #282c34;
`

export interface IList {
  id: number,
  name: string,
  list: ICard[],
}

export interface ICard {
  id: number,
  name: string,
  description?: string,
  comments?: IComment[],
}

export interface IComment {
  id: number,
  member: string,
  content: string,
}

export default App
