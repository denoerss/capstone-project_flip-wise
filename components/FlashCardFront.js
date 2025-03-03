import styled from "styled-components";

// const CardFront = styled.div``;

const StyledFront = styled.div`
  backface-visibility: hidden; /* Hide when flipped */
`;

const StyledQuestion = styled.p`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
`;

export default function FlashCardFront({ question, collectionTitle }) {
  return (
    <StyledFront>
      <p>{collectionTitle}</p>
      <StyledQuestion>{question}</StyledQuestion>
    </StyledFront>
  );
}
