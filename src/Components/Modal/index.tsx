import styled from "styled-components";

export const Modal = styled.div<ModalProps>`
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
  transform: ${(props) => (props.$isActive ? "scale(1)" : "scale(0)")};
`

export const ModalContent = styled.div<ModalContentProps>`
  position: relative;
  width: ${props => props.small ? "400px" : "600px"};
  height: ${props => props.small ? "70px" : "700px"};
  padding: 10px;
  background-color: white;
  cursor: auto;
  border-radius: 2px;
`

interface ModalProps {
  $isActive: boolean;
}

interface ModalContentProps {
  small?: any
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
