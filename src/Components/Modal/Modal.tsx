import styled from 'styled-components';
import { ModalContent } from './ModalContent';

export const Modal: React.FC<ModalProps> = ({$isActive, size, onClick, onKeyPress, children}) => {
  return (
    <StyledModal
      $isActive={$isActive}
      onClick={onClick}
      onKeyPress={onKeyPress}
    >
      <ModalContent
        size={size}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {children}
      </ModalContent>
    </StyledModal>
  );
}

const StyledModal = styled.div<ModalProps>`
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
  transform: ${(props) => (props.$isActive ? 'scale(1)' : 'scale(0)')};
`

interface ModalProps {
  $isActive: boolean,
  size?: 'small' | 'big' | undefined,
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void,
  onKeyPress?: (e: React.KeyboardEvent<HTMLDivElement>) => void,
}
