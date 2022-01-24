import styled from "styled-components";

export const StyledCardModal = styled.div`
  .header {
    padding: 10px;

    > H3 {
      margin: 0 0 5px;
    }

    > p {
      margin: 0;
    }
  }

  .description, .comments {
    padding: 10px;
  }

  .description {
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

    Textarea {
      margin: 0 0 10px;
      height: 100px;
    }

    .buttons {
      display: flex;
    }
  }

  .comments {
    &__block {
      background-color: #EEEEEE;
      padding-bottom: 10px;

      Textarea {
        margin: 0;
        outline: 0;
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
`
