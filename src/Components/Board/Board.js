import { StyledBoard } from './Board.style';
import Column from './Column/Column'

function Board(props) {
  return (
    <StyledBoard>
      <div>
        {props.list.map(col => (
          <Column key={col.id} name={col.name} list={col.list}></Column>
        ))}
      </div>
    </StyledBoard>
  );
}

export default Board;
