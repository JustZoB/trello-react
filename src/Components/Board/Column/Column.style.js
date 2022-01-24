import styled from "styled-components";

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
  min-width: 300px;
  height: fit-content;
  background-color: lightgray;
  border-radius: 7px;
  max-height: calc(100% - 15px);

  &:not(:last-child) {
    margin-right: 10px;
  }

  .cardList {
    overflow-y: auto;
    margin-bottom: 10px;
    padding: 0 5px;

    & > *:not(:last-child) {
      margin-bottom: 10px;
    }

    &::-webkit-scrollbar {
      padding-right: 10px;
      padding: 2px;
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      border-radius: 10px;
    }
  }
`
