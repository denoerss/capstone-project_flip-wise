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

export default function FlashCard({ card, onMarkCorrect, collections }) {
  const [showAnswer, setShowAnswer] = useState(false);

  function flipCard() {
    setShowAnswer(!showAnswer);
  }

  function handleCorrect(event) {
    event.stopPropagation();
    onMarkCorrect(card.id);
  }

  const collectionTitle = collections.find(
    (collection) => card.collectionId === collection.id
  )?.title;

  return (
    <StyledCard $showAnswer={showAnswer} onClick={flipCard}>
      <div>
        {showAnswer ? (
          <>
            <Button
              name={card.isCorrect ? "incorrect" : "correct"}
              onClick={handleCorrect}
            />
            <FlashCardBack
              answer={card.answer}
              collectionTitle={collectionTitle}
            />
          </>
        ) : (
          <FlashCardFront
            question={card.question}
            collectionTitle={collectionTitle}
          />
        )}
      </div>
    </StyledCard>
  );
}
