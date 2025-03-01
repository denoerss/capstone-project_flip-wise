import styled from "styled-components";

// const CardFront = styled.div``;

const StyledQuestion = styled.p`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
`;

export default function FlashCardFront({ question, collectionTitle }) {
  return (
    <>
      <p>{collectionTitle}</p>
      <StyledQuestion>{question}</StyledQuestion>
    </>
  );
}
