import styled from "styled-components";
import { useState } from "react";
import FlashCardFront from "./FlashCardFront";
import FlashCardBack from "./FlashCardBack";
import Button from "./Button";

const StyledCard = styled.li`
  background-color: ${({ $showAnswer }) =>
    $showAnswer ? "#93E9BE" : "lightgray"};
  position: relative;
  list-style: none;
  width: 80%;
  border-radius: 20px;
  padding: 25px 25px 70px;
  line-height: 1.25;
  &:hover {
    cursor: pointer;
  }
`;

const StyledDeleteContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
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

  function handleToggleButton(event) {
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
        <StyledDeleteContainer>
          {!isClicked ? (
            <Button
              $buttonVariant="delete"
              name="Delete"
              onClick={handleToggleButton}
            />
          ) : (
            <>
              <p>Delete Card?</p>
              <StyledButtonContainer>
                <Button name="Confirm" onClick={handleConfirmDelete} />
                <Button name="Cancel" onClick={handleToggleButton} />
              </StyledButtonContainer>
            </>
          )}
        </StyledDeleteContainer>
      </>
    </StyledCard>
  );
}
