import styled from "styled-components";

export const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: transparent;

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

  &:hover, &:active {
    &::before, &::after {
      height: 1.7px;
    }
  }
`
