import React from 'react';
import styled from 'styled-components';

export const TextInput: React.FC<Props> = ({type, placeholder, value, onChange}) => {
  return (
    <StyledTextInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

const StyledTextInput = styled.input`
  font-size: 14px;
  padding: 5px 10px;
  margin-right: 5px;
  width: 310px;
`

interface Props {
  type?: 'text' | 'password' | 'email' | 'search' | undefined;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}
