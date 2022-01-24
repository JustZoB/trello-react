import styled from "styled-components";

export const StyledAddCardButton = styled.div`

  .addButton {
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 0 5px;
    height: 14px;
    font-size: 14px;
    background-color: #DDDDDD;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: #EEEEEE;
    }

    &.hide {
      display: none;
    }
  }

  .addCard {
    display: none;

    &.active {
      display: block;
    }

    Textarea {
      margin: 0 5px 10px;
      padding: 10px;
      background-color: white;
      width: calc(100% - 30px);
      height: 50px;
      outline: 0;
    }

    .buttons {
      display: flex;
      margin: 0 5px;
    }
  }
`
