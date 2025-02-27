import styled from "styled-components";

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
    <>
      <p>{collectionTitle}</p>
      <StyledQuestion>{question}</StyledQuestion>
      <StyledAnswer>{answer}</StyledAnswer>
    </>
  );
}
