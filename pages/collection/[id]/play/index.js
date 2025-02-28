import { useRouter } from "next/router";
import PlayModeCard from "@/components/PlayModeCard";
import styled from "styled-components";
import { useState } from "react";

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

export default function PlayMode({ collections, flashCards }) {
  // Router
  const router = useRouter();
  const { id, card } = router.query; // id for remaining in current collection, card for moving to next card/page

  // States
  const [showStopConfirm, setShowStopConfirm] = useState(true);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(0);

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
  const currentPage = card ? parseInt(card, 10) : 0; // pareInt converts string into number, base 10 ensures number to be decimal
  // const firstPage = currentPage === 0;

  // Stop Functions
  function handleToggle() {
    setShowStopConfirm((prev) => !prev);
  }
  function handleConfirmStop() {
    router.push(`/collection/${id}`);
  }

  // Nav Functions
  // function handlePrev() {
  //   if (currentPage > 0) {
  //     setShowAnswer(false);
  //     setShowFinalMessage(false);
  //     router.back();
  //   }
  // }

  function handleNext() {
    if (currentPage < totalPages - 1) {
      setShowAnswer(false);
      // navigate to new URL while keeping current page structure
      router.push({
        pathname: router.pathname, // ensure to stay on same page
        query: { id, card: currentPage + 1 }, // go to next card
      });
    } else {
      setShowFinalMessage(true);
    }
  }

  // Retry Function
  function handleRetry() {
    setShowAnswer(false);
    setShowFinalMessage(false);
    setIsCorrect(0);
    router.push(`/collection/${id}/play?card=0`);
  }

  //Correct
  function handleCorrect() {
    setIsCorrect(isCorrect + 1);
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

      {showFinalMessage ? (
        <StyledMessageContainer>
          <h2>Well done!</h2>
          <p>
            {isCorrect} / {totalPages} answered correctly
          </p>
          <StyledButtonContainer>
            <StyledButton onClick={handleRetry}>retry</StyledButton>
            <StyledButton onClick={handleConfirmStop}>quit</StyledButton>
          </StyledButtonContainer>
        </StyledMessageContainer>
      ) : (
        <>
          <StyledCardContainer>
            {filteredFlashCards.length > 0 ? (
              <>
                <PlayModeCard
                  card={filteredFlashCards[currentPage]}
                  showAnswer={showAnswer}
                  setShowAnswer={setShowAnswer}
                />
              </>
            ) : (
              <p>No cards found.</p>
            )}
          </StyledCardContainer>

          <StyledFooter>
            {/* <StyledButton onClick={handlePrev} firstPage={firstPage}>
              prev
            </StyledButton> */}
            <button onClick={handleNext}>❌</button>
            <p aria-label="page-counter">
              {currentPage + 1} / {totalPages}
            </p>
            {/* <StyledButton onClick={handleNext}>next</StyledButton> */}
            <button onClick={handleCorrect}>✅</button>
          </StyledFooter>
        </>
      )}
    </StyledMain>
  );
}
