import { StyledBoard } from './Board.style';
import { Column } from './Column/Column'
import { ColumnList } from './ColumnList.style'
import GreetingsModal from './GreetingsModal/GreetingsModal'

interface BoardProps {
  list: {
    id: number,
    name: string,
    list: 
      {
        id: number,
        name: string
      }[]
  }[]
}

export const Board: React.FC<BoardProps> = ({list}) => {
  return (
    <StyledBoard>
      <ColumnList>
        {list.map(({id, name, list}) => (
          <Column
            key={id}
            colName={name}
            list={list}
          />
        ))}
      </ColumnList>
      <GreetingsModal />
    </StyledBoard>
  );
}
