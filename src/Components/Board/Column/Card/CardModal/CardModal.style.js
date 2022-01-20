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

  > div {
    width: 700px;
    height: 800px;
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
        margin: 10px 0;
        font-weight: 600;
      }
    }

    > .closeIcon {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 20px;
      height: 20px;
    }
  }
`
