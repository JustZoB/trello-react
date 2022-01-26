import styled from "styled-components";

export const Button = styled.button`
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
`

export const InputButton = styled.input`
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
`

export const ButtonsWrapper = styled.div`
  display: flex;
`
