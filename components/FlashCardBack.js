import styled from "styled-components";

const StyledBack = styled.div`
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;

const StyledAnswer = styled.p`
  font-size: 2rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function FlashCardBack({ answer, question, collectionTitle }) {
  return (
    <StyledBack>
      {collectionTitle && <p>{collectionTitle}</p>}

      <StyledAnswer>{answer}</StyledAnswer>
    </StyledBack>
  );
}
