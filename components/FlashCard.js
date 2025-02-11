import styled from "styled-components";
import { useState } from "react";
import FlashCardFront from "./FlashCardFront";
import FlashCardBack from "./FlashCardBack";
import Button from "./Button";

const StyledCard = styled.li`
  background-color: ${({ $showAnswer }) =>
    $showAnswer ? "#A9A9A9" : "#D3D3D3"};
  position: relative;
  list-style: none;
  width: 80%;
  border-radius: 20px;
  padding: 25px 25px 80px;
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

const StyledWarning = styled.p`
  background-color: #ffa500;
  padding: 5px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export default function FlashCard({
  card,
  onMarkCorrect,
  collections,
  deleteCard,
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(true);

  function flipCard() {
    setShowAnswer((prev) => !prev);
  }

  function handleCorrect(event) {
    event.stopPropagation();
    onMarkCorrect(card.id);
  }

  function handleToggleButton(event) {
    event.stopPropagation();
    setShowDeleteButton((prev) => !prev);
  }

  function handleConfirmDelete(event) {
    event.stopPropagation();
    setShowDeleteButton(true);
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
              onClick={handleCorrect}
              buttonVariant={card.isCorrect ? "incorrect" : "correct"}
            >
              {card.isCorrect ? "incorrect" : "correct"}
            </Button>
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
          {showDeleteButton ? (
            <Button buttonVariant="delete" onClick={handleToggleButton}>
              Delete
            </Button>
          ) : (
            <>
              <StyledWarning>Delete Card?</StyledWarning>
              <StyledButtonContainer>
                <Button buttonVariant="confirm" onClick={handleConfirmDelete}>
                  Confirm
                </Button>
                <Button buttonVariant="cancel" onClick={handleToggleButton}>
                  Cancel
                </Button>
              </StyledButtonContainer>
            </>
          )}
        </StyledDeleteContainer>
      </>
    </StyledCard>
  );
}
