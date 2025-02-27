import styled, { css } from "styled-components";

const StyledButton = styled.button`
  min-width: 80px;
  padding: 1rem;
  border-style: none;
  border-radius: 10px;
  font-size: 1.25rem;
  &:hover {
    cursor: pointer;
  }

  ${({ $buttonVariant }) =>
    $buttonVariant === "delete" &&
    css`
      background-color: #ff6347;
    `}

  ${({ $buttonVariant }) =>
    $buttonVariant === "confirm" &&
    css`
      background-color: #eedc82;
    `}

  ${({ $buttonVariant }) =>
    $buttonVariant === "cancel" &&
    css`
      background-color: #e57373;
    `}

  ${({ $buttonVariant }) =>
    $buttonVariant === "edit" &&
    css`
      background-color: #8c97d7;
    `}

      ${({ $buttonVariant }) =>
    $buttonVariant === "create" &&
    css`
      border: 1px solid #000000;
    `}
`;

export default function Button({ onClick, children, buttonVariant }) {
  return (
    <StyledButton $buttonVariant={buttonVariant} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
