import { flashcards } from "@/lib/data";
import FlashCard from "./FlashCard";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding-left: 0px;
`;

const StyledHeading = styled.h2`
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

export default function FlashCardList(isCorrect) {
  return (
    <>
      <StyledHeading>Flip Cards List</StyledHeading>
      <StyledList>
        {isCorrect &&
          flashcards.map(({ id, question, answer, collectionId }) => (
            <FlashCard
              key={id}
              question={question}
              answer={answer}
              collectionId={collectionId}
            />
          ))}
      </StyledList>
    </>
  );
}
