import React from 'react';
import styled from 'styled-components';

export const DescriptionContent: React.FC<Props> = ({$isActive, description, onClick}) => {
  return (
    <StyledDescriptionContent
      $isActive={$isActive}
      onClick={onClick}
    >
      {description}
    </StyledDescriptionContent>
  );
}

const StyledDescriptionContent = styled.div<Props>`
  display: ${(props) => (props.$isActive ? 'block' : 'none')};
  font-size: 14px;
  width: calc(100% - 20px);
  background-color: white;
  padding: 10px;
  cursor: pointer;
  margin: 10px 0 0;
  border-radius: 3px;
`

interface Props {
  $isActive: boolean;
  description?: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}