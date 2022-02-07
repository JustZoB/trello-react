import React from 'react';
import styled from 'styled-components';

export const Textarea: React.FC<Props> = ({placeholder, value, onChange, onKeyPress, autoFocus, onFocus}) => {
  return (
    <StyledTextarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      autoFocus={autoFocus}
      onFocus={onFocus}
    />
  );
}

export const TextareaHead: React.FC<Props> = ({placeholder, value, onChange, onKeyPress, autoFocus, onFocus, thisRef}) => {
  return (
    <StyledTextareaHead
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      autoFocus={autoFocus}
      onFocus={onFocus}
      ref={(el) => {
        if (thisRef) {
          thisRef.current = el
        }
      }}
    />
  );
}

const StyledTextarea = styled.textarea`
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

const StyledTextareaHead = styled(StyledTextarea)`
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

interface Props {
  placeholder?: string,
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  onKeyPress?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void,
  autoFocus?: boolean,
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void,
  thisRef?: React.MutableRefObject<HTMLTextAreaElement | null>,
}
