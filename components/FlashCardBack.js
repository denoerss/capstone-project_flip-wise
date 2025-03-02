import styled from "styled-components";

const StyledBack = styled.div`
  backface-visibility: hidden;
  transform: rotateY(180deg); /* Fix mirrored issue */
`;

const StyledQuestion = styled.p`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
`;

const StyledAnswer = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
`;

export default function FlashCardBack({ answer, question, collectionTitle }) {
  return (
    <StyledBack>
      <p>{collectionTitle}</p>
      <StyledQuestion>{question}</StyledQuestion>
      <StyledAnswer>{answer}</StyledAnswer>
    </StyledBack>
  );
}
