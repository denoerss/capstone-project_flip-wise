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
  background-color: ${({ $buttonVariant }) =>
    $buttonVariant === "delete" ? "red" : "#EEDC82"};
`;

export default function Button({ onClick, name, $buttonVariant }) {
  return (
    <StyledButton $buttonVariant={$buttonVariant} onClick={onClick}>
      {name}
    </StyledButton>
  );
}
