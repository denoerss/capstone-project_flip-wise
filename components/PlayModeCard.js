import FlashCardBack from "./FlashCardBack";
import FlashCardFront from "./FlashCardFront";
import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
  background-color: #fff;
  width: 90%;
  min-height: 35vh;
  border-radius: 35px;
  padding: 30px;
  padding-top: 15px;
  line-height: 1.3;
  &:hover {
    cursor: pointer;
  }
`;

const StyledButton = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  padding: 0.9rem;
  background-color: transparent;
  border: 1.5px solid #000;
  border-radius: 50px;
  font-size: 1.3rem;
  &:hover {
    cursor: pointer;
  }
`;

export default function PlayModeCard({
  card,
  onMarkCorrect,
  showAnswer,
  setShowAnswer,
}) {
  function toggleAnswer() {
    setShowAnswer((prev) => !prev);
  }

  function handleCorrect(event) {
    event.stopPropagation();
    onMarkCorrect(card.id);
  }

  return (
    <StyledCard onClick={toggleAnswer}>
      <>
        {showAnswer ? (
          <>
            <FlashCardBack answer={card.answer} question={card.question} />

            <StyledButton
              onClick={handleCorrect}
              buttonVariant={card.isCorrect ? "incorrect" : "correct"}
            >
              {card.isCorrect ? "incorrect" : "correct"}
            </StyledButton>
          </>
        ) : (
          <FlashCardFront question={card.question} />
        )}
      </>
    </StyledCard>
  );
}
