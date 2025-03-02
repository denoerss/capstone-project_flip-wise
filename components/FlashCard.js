import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";
import FlashCardFront from "./FlashCardFront";
import FlashCardBack from "./FlashCardBack";
import Button from "./Button";
import { Bookmark } from "lucide-react";

const flipVariants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

const StyledCard = styled(motion.li)`
  background-color: var(--white);
  position: relative;
  list-style: none;
  min-height: 300px;
  width: 95vw;
  border-radius: 20px;
  padding: 25px;
  line-height: 1.25;
  transform-style: preserve-3d;
  &:hover {
    cursor: pointer;
  }
`;

// New wrapper that counter-rotates the buttons.
const ButtonWrapper = styled.div`
  transform: ${({ $showAnswer }) => ($showAnswer ? "rotateY(180deg)" : "none")};
  backface-visibility: hidden;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;
  bottom: 10px;
  right: 20px;
  gap: 10px;
  margin-bottom: 15px;
`;

const StyledDeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const StyledConfirmContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

const StyledWarning = styled.p`
  padding: 5px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const StyledBookmark = styled(motion(Bookmark))`
  ${({ $showAnswer }) => ($showAnswer ? "left: 30px;" : "right: 30px;")}
  position: absolute;
  height: 36px;
  width: 36px;
  transform: ${({ $showAnswer }) => $showAnswer && "rotateY(180deg)"};
`;

export default function FlashCard({ card, onLiked, deleteCard, collections }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(true);

  const router = useRouter();

  function flipCard() {
    setShowAnswer((prev) => !prev);
  }

  function handleLiked(event) {
    event.stopPropagation();
    onLiked(card.id);
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
    <StyledCard
      $showAnswer={showAnswer}
      onClick={flipCard}
      animate={showAnswer ? "back" : "front"}
      variants={flipVariants}
      transition={{ duration: 0.5 }}
    >
      <>
        <StyledBookmark
          onClick={handleLiked}
          $showAnswer={showAnswer}
          fill={card.isLiked ? "#111111" : "#e1e1e1"}
          strokeWidth={1.25}
          animate={{ scale: card.isLiked ? 1.1 : 1 }}
        />
        {showAnswer ? (
          <FlashCardBack
            answer={card.answer}
            collectionTitle={collectionTitle}
          />
        ) : (
          <FlashCardFront
            question={card.question}
            collectionTitle={collectionTitle}
          />
        )}
        <ButtonWrapper $showAnswer={showAnswer}>
          <StyledButtonContainer>
            <Button
              onClick={(event) => {
                event.stopPropagation();
                router.push(`/edit/card/${card.id}`);
              }}
            >
              Edit
            </Button>

            <StyledDeleteContainer>
              {showDeleteButton ? (
                <Button buttonVariant="delete" onClick={handleToggleButton}>
                  Delete
                </Button>
              ) : (
                <>
                  <StyledWarning>Delete Card?</StyledWarning>
                  <StyledConfirmContainer>
                    <Button
                      buttonVariant="confirm"
                      onClick={handleConfirmDelete}
                    >
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
        </ButtonWrapper>
      </>
    </StyledCard>
  );
}
