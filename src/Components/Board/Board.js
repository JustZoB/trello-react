import { StyledBoard } from './Board.style';
import Column from './Column/Column'

function Board(props) {
  return (
    <StyledBoard>
      <Column></Column>
      <Column></Column>
      <Column></Column>
    </StyledBoard>
  );
}

export default Board;
