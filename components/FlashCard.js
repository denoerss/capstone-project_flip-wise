import styled from "styled-components";
import { useState } from "react";
import FlashCardFront from "./FlashCardFront";
import FlashCardBack from "./FlashCardBack";
import Button from "./Button";
import Link from "next/link";
import { Bookmark } from "lucide-react";

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

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
`;

const StyledDeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledConfirmContainer = styled.div`
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

const StyledEditLink = styled(Link)`
  background-color: rgb(149, 178, 246);
  min-width: 80px;
  padding: 0.9rem;
  border-style: none;
  border-radius: 10px;
  font-size: 1.3rem;
  color: rgb(17, 17, 17);
  text-decoration: none;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const StyledBookmark = styled(Bookmark)`
  position: absolute;
  right: 30px;
  height: 36px;
  width: 36px;
`;

export default function FlashCard({
  card,
  onMarkCorrect,
  deleteCard,
  collections,
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
        <StyledBookmark
          onClick={handleCorrect}
          fill={card.isCorrect ? "#111111" : "none"}
        >
          {card.isCorrect ? "incorrect" : "correct"}
        </StyledBookmark>
        {showAnswer ? (
          <>
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
        <StyledButtonContainer>
          <StyledEditLink
            href={`/edit/card/${card.id}`}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            Edit
          </StyledEditLink>

          <StyledDeleteContainer>
            {showDeleteButton ? (
              <Button buttonVariant="delete" onClick={handleToggleButton}>
                Delete
              </Button>
            ) : (
              <>
                <StyledWarning>Delete Card?</StyledWarning>
                <StyledConfirmContainer>
                  <Button buttonVariant="confirm" onClick={handleConfirmDelete}>
                    Confirm
                  </Button>
                  <Button buttonVariant="cancel" onClick={handleToggleButton}>
                    Cancel
                  </Button>
                </StyledConfirmContainer>
              </>
            )}
          </StyledDeleteContainer>
        </StyledButtonContainer>
      </>
    </StyledCard>
  );
}
