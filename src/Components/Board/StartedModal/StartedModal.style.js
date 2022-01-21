import styled from "styled-components";

export const StyledStartedModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);

  &.active {
    transform: scale(1);
  }

  > .modal__content {
    position: relative;
    width: 400px;
    height: 70px;
    padding: 10px;
    background-color: white;
    cursor: auto;
    border-radius: 2px;

    h4 {
      margin: 0 0 10px;
    }

    form {
      display: flex;

      input[type="text"] {
        font-size: 14px;
        padding: 5px 10px;
        margin-right: 5px;
        width: 310px;
      }

      input[type="submit"] {
        border-radius: 3px;
        background-color: #0079bf;
        color: white;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 10px;
        cursor: pointer;
        margin-right: 5px;
        border: 0;

        &:hover {
          background-color: #026aa7;
        }

        &:active {
          background-color: #055a8c;
        }
      }
    }
  }
`
