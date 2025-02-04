import styled from "styled-components";
import { collections } from "@/lib/data";
import { useState } from "react";

const StyledCard = styled.li`
  background-color: lightgray;
  list-style: none;
  width: 80%;
  border-radius: 20px;
  padding: 25px 25px;
  line-height: 1.25;
  &:hover {
    cursor: pointer;
  }
`;

const StyledQuestion = styled.p`
  font-size: 1.75rem;
  font-weight: 600;
`;

const StyledAnswer = styled.p`
  font-size: 1.75rem;
  font-weight: 400;
`;

export default function FlashCard({ question, answer, collectionId }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <StyledCard onClick={() => setShowAnswer(!showAnswer)}>
      <p>
        {
          collections.find((collection) => collectionId === collection.id)
            ?.title
        }
      </p>
      {showAnswer ? (
        <StyledAnswer>{answer}</StyledAnswer>
      ) : (
        <StyledQuestion>{question}</StyledQuestion>
      )}
    </StyledCard>
  );
}
