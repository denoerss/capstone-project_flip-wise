import { useRouter } from "next/router";
import PlayModeCard from "@/components/PlayModeCard";
import formatTime from "@/lib/utils";
import styled from "styled-components";
import { useState, useEffect } from "react";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.color || "#ffffff"};
  flex-grow: 1;
  min-height: 100vh;
  :hover {
    cursor: pointer;
  }
`;

const StyledCountDown = styled.h2`
  font-size: 7rem;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2.25rem;
  position: fixed;
  top: 2rem;
  z-index: 100;
  transition: transform 0.3s ease;
`;

const StyledHeadline = styled.h1`
  display: flex;
  justify-content: flex-start;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  gap: 20px;
`;

const StyledButton = styled.button`
  padding: 0.9rem;
  border: 1.5px solid black;
  min-width: 100px;
  border-radius: 30px;
  font-size: 1.3rem;
  color: ${(props) => (props.stop ? "#fff" : "#000")};
  background-color: ${(props) => (props.stop ? "#000" : "transparent")};

  &:hover {
    cursor: pointer;
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 20px;
`;

const StyledMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding-bottom: 20px;
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 30px;
  z-index: 200;
`;

const GAME_STATES = {
  COUNTDOWN: "countdown",
  PLAY: "play",
  END: "end",
};

export default function PlayMode({ collections, flashCards }) {
  // Router
  const router = useRouter();
  const { id } = router.query; // id for remaining in current collection, card for moving to next card/page

  // States
  const [showStopConfirm, setShowStopConfirm] = useState(true);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [countDown, setCountDown] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [gameState, setGameState] = useState(GAME_STATES.COUNTDOWN);

  // Countdown Timer: Runs until 0, then shows quiz content
  const isCounting = countDown > 0;

  useEffect(() => {
    if (!isCounting) {
      return setGameState(GAME_STATES.PLAY);
    }

    const timeoutId = setTimeout(() => {
      setCountDown(countDown - 1);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [countDown]);

  //Timer
  useEffect(() => {
    if (showFinalMessage || !showStopConfirm) return; // Stop timer when quiz ends

    const timer =
      !isCounting &&
      setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
      }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [showFinalMessage, showStopConfirm, isCounting]);

  // Background Color
  const currentCollection = collections.find(
    (collection) => collection.id === id
  );
  if (!currentCollection) return <p>No collection found.</p>;

  const backgroundColor = currentCollection.color;

  // Pages / Cards
  const filteredFlashCards = flashCards.filter(
    (card) => card.collectionId === currentCollection.id
  );
  const totalPages = filteredFlashCards.length;

  // Stop Functions
  function handleToggle() {
    setShowStopConfirm((prev) => !prev);
  }
  function handleConfirmStop() {
    router.push(`/collection/${id}`);
  }

  // Nav Functions
  function handleNext() {
    if (currentPage < totalPages - 1) {
      setShowAnswer(false);
      // navigate to new URL while keeping current page structure
      setCurrentPage(currentPage + 1);
    } else {
      setShowFinalMessage(true);
      setGameState(GAME_STATES.END);
    }
  }

  // Retry Function
  function handleRetry() {
    setShowAnswer(false);
    setShowFinalMessage(false);
    setScore(0);
    setTimeElapsed(0); // Reset the timer
    setCurrentPage(0);
    setGameState(GAME_STATES.PLAY);
  }

  //Correct
  function handleCorrect() {
    setScore(score + 1);
    handleNext();
  }

  return (
    <StyledMain color={backgroundColor}>
      <StyledHeader>
        <StyledHeadline>{currentCollection.title}</StyledHeadline>
        {showStopConfirm ? (
          <StyledButton onClick={handleToggle} stop={stop}>
            ⏹ stop
          </StyledButton>
        ) : (
          <>
            <StyledButtonContainer>
              <StyledButton onClick={handleConfirmStop}>confirm</StyledButton>
              <StyledButton onClick={handleToggle}>cancel</StyledButton>
            </StyledButtonContainer>
          </>
        )}
      </StyledHeader>

      <>
        {gameState === GAME_STATES.COUNTDOWN && (
          <StyledCountDown>{countDown}</StyledCountDown>
        )}

        {gameState === GAME_STATES.PLAY && (
          <>
            <StyledCardContainer>
              <p>Time: {formatTime(timeElapsed)}</p>
              {filteredFlashCards.length > 0 ? (
                <PlayModeCard
                  card={filteredFlashCards[currentPage]}
                  showAnswer={showAnswer}
                  setShowAnswer={setShowAnswer}
                />
              ) : (
                <p>No cards found.</p>
              )}
            </StyledCardContainer>
            <StyledFooter>
              <button onClick={handleNext}>❌</button>
              <p aria-label="page-counter">
                {currentPage + 1} / {totalPages}
              </p>
              <button onClick={handleCorrect}>✅</button>
            </StyledFooter>
          </>
        )}

        {gameState === GAME_STATES.END && (
          <StyledMessageContainer>
            <h2>Well done!</h2>
            <p>
              You have answered <br />
              {score} / {totalPages} questions correctly <br />
              in {formatTime(timeElapsed)} seconds.
            </p>
            <StyledButtonContainer>
              <StyledButton onClick={handleRetry}>retry</StyledButton>
              <StyledButton onClick={handleConfirmStop}>quit</StyledButton>
            </StyledButtonContainer>
          </StyledMessageContainer>
        )}
      </>
    </StyledMain>
  );
}
