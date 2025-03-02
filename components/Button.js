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
    $buttonVariant === "allCards" &&
    css`
      border: 1px solid #000000;
      border-radius: 24px;
      height: 48px;
    `}

  ${({ $buttonVariant }) =>
    $buttonVariant === "allCardsActive" &&
    css`
      border: 1px solid #000000;
      border-radius: 24px;
      height: 48px;
      color: #ffffff;
      background-color: #000000;
    `}
`;

export default function Button({ onClick, children, buttonVariant }) {
  return (
    <StyledButton $buttonVariant={buttonVariant} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
