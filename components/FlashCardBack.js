import styled from "styled-components";

const StyledAnswer = styled.p`
  font-size: 1.75rem;
  font-weight: 600;
`;

export default function FlashCardBack({ answer, collectionTitle }) {
  return (
    <>
      <p>{collectionTitle}</p>
      <StyledAnswer>{answer}</StyledAnswer>
    </>
  );
}
