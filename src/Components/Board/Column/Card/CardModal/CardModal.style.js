import styled from "styled-components";

export const StyledCardModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);

  &.active {
    transform: scale(1);
  }

  > .modal__content {
    position: relative;
    width: 600px;
    height: 700px;
    padding: 10px;
    background-color: white;
    cursor: auto;
    border-radius: 2px;

    > .header {
      padding: 10px;

      > h3 {
        margin: 0 0 5px;
        font-weight: 600;
      }

      > p {
        margin: 0;
      }
    }

    > .description, .comments {
      padding: 10px;

      > h4 {
        margin: 0 0 10px;
        font-weight: 600;
      }
    }

    > .description {
      .buttonEdit {
        font-size: 14px;
        width: calc(100% - 20px);
        background-color: #EEEEEE;
        display: block;
        padding: 10px;
        height: 40px;
        cursor: pointer;
        margin: 10px 0 0;
        border-radius: 3px;

        &:hover {
          background-color: #DDDDDD;
        }

        &.hide {
          display: none;
        }
      }
      .editDescription {
        display: none;

        &.active {
          display: block;
        }
      }

      textarea {
        font-size: 14px;
        margin: 0 0 10px;
        padding: 10px;
        background-color: #EEEEEE;
        width: calc(100% - 20px);
        height: 100px;
        overflow: hidden;
        border: 0;
        resize: none;
        border-radius: 3px;
      }

      .buttons {
        display: flex;
      }
    }

    .comments {
      &__block {
        background-color: #EEEEEE;
        padding-bottom: 10px;

        textarea {
          font-size: 14px;
          margin: 0;
          padding: 10px;
          background-color: #EEEEEE;
          width: calc(100% - 20px);
          height: 20px;
          overflow: hidden;
          border: 0;
          outline: 0;
          resize: none;
          border-radius: 3px;
        }

        .button {
          width: fit-content;
          margin-left: 10px;

          &.hide {
            display: none;
          }
        }
      }
    }

    > .closeIcon {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 5px;
      right: 5px;
      width: 40px;
      height: 40px;
      cursor: pointer;
      border-radius: 50%;
      background-color: transparent;
      z-index: 102;
      
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }

      &::before, &::after {
        content: "";
        display: block;
        position: absolute;
        width: 18px;
        height: 1.5px;
        background-color: black;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }
  }
`
