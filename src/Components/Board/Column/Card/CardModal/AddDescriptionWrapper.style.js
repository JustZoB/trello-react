import styled from "styled-components";

export const AddDescriptionWrapper = styled.div`
  display: ${(props) => (props.$isActive ? "block" : "none")};
`
