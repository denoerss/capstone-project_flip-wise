import FlashCardBack from "./FlashCardBack";
import FlashCardFront from "./FlashCardFront";
import Button from "./Button";
import styled from "styled-components";
import { useState } from "react";

const StyledCard = styled.li`
  background-color: ${({ $showAnswer }) =>
    $showAnswer ? "#A9A9A9" : "#D3D3D3"};
  position: relative;
  list-style: none;
  width: 80%;
  border-radius: 20px;
  padding: 25px 25px 25px;
  line-height: 1.25;
  &:hover {
    cursor: pointer;
  }
`;

export default function PlayModeCard({ card, onMarkCorrect }) {
  const [showAnswer, setShowAnswer] = useState(false);

  function flipCard() {
    setShowAnswer((prev) => !prev);
  }

  function handleCorrect(event) {
    event.stopPropagation();
    onMarkCorrect(card.id);
  }

  return (
    <StyledCard $showAnswer={showAnswer} onClick={flipCard}>
      <>
        {showAnswer ? (
          <>
            <Button
              onClick={handleCorrect}
              buttonVariant={card.isCorrect ? "incorrect" : "correct"}
            >
              {card.isCorrect ? "incorrect" : "correct"}
            </Button>
            <FlashCardBack answer={card.answer} />
          </>
        ) : (
          <FlashCardFront question={card.question} />
        )}
      </>
    </StyledCard>
  );
}
