import styled from "styled-components";
import { useState } from "react";
import FlashCardFront from "./FlashCardFront";
import FlashCardBack from "./FlashCardBack";

const StyledCard = styled.li`
  background-color: ${({ $showAnswer }) =>
    $showAnswer ? "#93E9BE" : "lightgray"};
  list-style: none;
  width: 80%;
  border-radius: 20px;
  padding: 25px 25px;
  line-height: 1.25;
  &:hover {
    cursor: pointer;
  }
`;

const CardInner = styled.div``;

export default function FlashCard({ question, answer, collectionId }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <StyledCard
      $showAnswer={showAnswer}
      onClick={() => setShowAnswer(!showAnswer)}
    >
      <CardInner>
        {showAnswer ? (
          <FlashCardBack answer={answer} collectionId={collectionId} />
        ) : (
          <FlashCardFront question={question} collectionId={collectionId} />
        )}
      </CardInner>
    </StyledCard>
  );
}
