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

export default function PlayModeCard({ card, showAnswer, setShowAnswer }) {
  function toggleAnswer() {
    setShowAnswer((prev) => !prev);
  }

  return (
    <StyledCard onClick={toggleAnswer}>
      <>
        {showAnswer ? (
          <FlashCardBack answer={card.answer} question={card.question} />
        ) : (
          <FlashCardFront question={card.question} />
        )}
      </>
    </StyledCard>
  );
}
