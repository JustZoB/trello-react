import { useState } from 'react';
import styled from 'styled-components';
import { IList } from '../../App';
import { Column } from '../Column';
import { GreetingsModal } from '../GreetingsModal';

export const Board: React.FC<BoardProps> = ({list}) => {
  const [memberName, setMemberName] = useState<string>('');

  const handleSubmit = (name: string) => {
    setMemberName(name)
  }

  return (
    <StyledBoard>
      <ColumnList>
        {list.map(({id, name, list}) => (
          <Column
            key={id}
            id={id}
            name={name}
            list={list}
            memberName={memberName}
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

interface BoardProps {
  list: IList[],
}
