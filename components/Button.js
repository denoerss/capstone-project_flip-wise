import styled, { css } from "styled-components";

const StyledButton = styled.button`
  min-width: 80px;
  padding: 15px;
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
    $buttonVariant === "correct" &&
    css`
      background-color: #93e9be;
    `}

  ${({ $buttonVariant }) =>
    $buttonVariant === "incorrect" &&
    css`
      background-color: rgb(247, 207, 229);
    `}
`;

export default function Button({ onClick, children, buttonVariant }) {
  return (
    <StyledButton $buttonVariant={buttonVariant} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
