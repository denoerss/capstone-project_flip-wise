import styled from "styled-components";

const StyledButton = styled.button`
  min-width: 80px;
  padding: 15px;
  border-style: none;
  border-radius: 10px;
  font-size: 1.25rem;
  &:hover {
    cursor: pointer;
  }
`;

export default function Button({ onClick, name }) {
  return <StyledButton onClick={onClick}>{name}</StyledButton>;
}
