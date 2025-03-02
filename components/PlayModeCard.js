import { motion } from "motion/react";
import FlashCardBack from "./FlashCardBack";
import FlashCardFront from "./FlashCardFront";
import styled from "styled-components";

const StyledCard = styled(motion.div)`
  position: relative;
  background-color: var(--white);
  width: 90%;
  min-height: 35vh;
  border-radius: 35px;
  padding: 30px;
  padding-top: 15px;
  line-height: 1.3;
  &:hover {
    cursor: pointer;
  }
  transform-style: preserve-3d;
`;

export default function PlayModeCard({ card, showAnswer, setShowAnswer }) {
  function toggleAnswer() {
    setShowAnswer((prev) => !prev);
  }

  return (
    <StyledCard
      onClick={toggleAnswer}
      animate={{ rotateY: showAnswer ? 180 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {showAnswer ? (
        <FlashCardBack answer={card.answer} question={card.question} />
      ) : (
        <FlashCardFront question={card.question} />
      )}
    </StyledCard>
  );
}
