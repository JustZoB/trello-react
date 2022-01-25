import styled from "styled-components";

export const AddDescriptionButton = styled.div`
  display: ${(props) => (props.$isActive ? "block" : "none")};
  font-size: 14px;
  width: calc(100% - 20px);
  background-color: #EEEEEE;
  padding: 10px;
  height: 40px;
  cursor: pointer;
  margin: 10px 0 0;
  border-radius: 3px;

  &:hover {
    background-color: #DDDDDD;
  }
`
