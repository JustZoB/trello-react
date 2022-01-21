import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 14px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 2px 0 0 rgba(34, 60, 80, 0.2);
  cursor: pointer;

  > p {
    font-size: 14px;
    margin: 0;
  }

  &:hover {
    background-color: aliceblue;
  }
`
