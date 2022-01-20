import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 20px;
  background-color: white;
  border-radius: 7px;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    background-color: aliceblue;
  }
`
