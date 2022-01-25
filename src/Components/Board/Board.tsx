import { StyledBoard } from './Board.style';
import { Column } from './Column/Column'
import StartedModal from './StartedModal/StartedModal'

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

export const Board: React.FC<BoardProps> = props => {
  return (
    <StyledBoard>
      <div>
        {props.list.map(col => (
          <Column
            key={col.id}
            name={col.name}
            list={col.list}
          />
        ))}
      </div>
      <StartedModal />
    </StyledBoard>
  );
}
