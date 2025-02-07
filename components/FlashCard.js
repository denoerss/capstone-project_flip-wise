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

export default function FlashCard({
  card,
  onMarkCorrect,
  collections,
  deleteCard,
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  function flipCard() {
    setShowAnswer((prev) => !prev);
  }

  function handleCorrect(event) {
    event.stopPropagation();
    onMarkCorrect(card.id);
  }

  function handleToggleDelete(event) {
    event.stopPropagation();
    setIsClicked((prev) => !prev);
  }

  function handleConfirmDelete(event) {
    event.stopPropagation();
    setIsClicked((prev) => !prev);
    deleteCard(card.id);
  }

  const collectionTitle = collections.find(
    (collection) => card.collectionId === collection.id
  )?.title;

  return (
    <StyledCard $showAnswer={showAnswer} onClick={flipCard}>
      <>
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
        {!isClicked ? (
          <Button name="Delete" onClick={handleToggleDelete} />
        ) : (
          <>
            <Button name="Confirm" onClick={handleConfirmDelete} />
            <Button name="Cancel" onClick={handleToggleDelete} />
          </>
        )}
      </>
    </StyledCard>
  );
}
