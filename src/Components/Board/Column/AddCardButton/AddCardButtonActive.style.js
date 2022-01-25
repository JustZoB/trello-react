import styled from "styled-components";

export const AddCardButtonActive = styled.p`
  display: ${(props) => (props.$isActive ? "flex" : "none")};
  align-items: center;
  padding: 10px;
  margin: 0;
  height: 14px;
  font-size: 14px;
  background-color: #DDDDDD;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #EEEEEE;
  }
`
