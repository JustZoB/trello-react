import styled from 'styled-components';

export const ModalContent: React.FC<ModalContentProps> = ({size, onClick, children}) => {
  return (
    <StyledModalContent size={size} onClick={onClick}>
      {children}
    </StyledModalContent>
  );
}

const StyledModalContent = styled.div<ModalContentProps>`
  position: relative;
  width: ${(props) => (props.size === 'small' ? '400px' : '600px')};
  height: ${(props) => (props.size === 'small' ? '70px' : '700px')};
  padding: 10px;
  background-color: white;
  cursor: auto;
  border-radius: 2px;
`

interface ModalContentProps {
  size?:  'small' | 'big' | undefined,
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void,
}
