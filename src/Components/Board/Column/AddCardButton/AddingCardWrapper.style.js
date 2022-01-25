import styled from "styled-components";

export const AddingCardWrapper = styled.div`
  display: ${(props) => (props.$isActive ? "block" : "none")};

  Textarea {
    margin: 0 0 10px;
    padding: 10px;
    background-color: white;
    width: calc(100% - 20px);
    height: 50px;
    outline: 0;
  }
`
