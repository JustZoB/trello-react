import styled from "styled-components";

export const Textarea = styled.textarea`
  overflow: hidden;
  border: 0;
  resize: none;
  border-radius: 3px;
  font-size: 14px;
  margin: 0;
  padding: 10px;
  background-color: #EEEEEE;
  width: calc(100% - 20px);
  height: 20px;
`

export const TextareaHead = styled(Textarea)`
  font-size: 20px;
  margin: 0 5px 10px 2px;
  padding: 2px 2px 2px 5px;
  background-color: transparent;
  height: 30px;
  font-weight: 600;
  
  &:focus {
    background-color: white;
  }
`
