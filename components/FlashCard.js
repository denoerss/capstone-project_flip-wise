import styled from "styled-components";
import { useState } from "react";
import FlashCardFront from "./FlashCardFront";
import FlashCardBack from "./FlashCardBack";
import Button from "./Button";

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

  function flipCard() {
    setShowAnswer(!showAnswer);
  }

  function handleCorrect(event) {
    event.stopPropagation();
  }

  return (
    <StyledCard $showAnswer={showAnswer} onClick={flipCard}>
      <CardInner>
        {showAnswer ? (
          <>
            <Button name="correct" onClick={handleCorrect} />
            <FlashCardBack answer={answer} collectionId={collectionId} />
          </>
        ) : (
          <FlashCardFront question={question} collectionId={collectionId} />
        )}
      </CardInner>
    </StyledCard>
  );
}
