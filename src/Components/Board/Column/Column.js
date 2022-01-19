import { StyledColumn } from './Column.style';
import Card from './Card/Card'

function Column(props) {
  return (
    <StyledColumn>
      <h1>Column</h1>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </StyledColumn>
  );
}

export default Column;
