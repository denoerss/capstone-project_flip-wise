import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: 1.5px solid var(--black);
  border-radius: 50px;
  padding: 15px;
  min-width: 100px;
  font-size: 16px;
  &:hover {
    cursor: pointer;
    font-style: italic;
  }

  ${({ $buttonVariant }) =>
    $buttonVariant === "black" &&
    css`
      border: 1px solid var(--black);
      color: var(--white);
      background-color: var(--black);
    `}
`;

export default function Button({ onClick, children, buttonVariant }) {
  return (
    <StyledButton $buttonVariant={buttonVariant} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
