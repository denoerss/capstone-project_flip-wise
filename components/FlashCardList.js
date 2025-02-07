import FlashCard from "./FlashCard";
import styled from "styled-components";
import { useRouter } from "next/router";

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

export default function FlashCardList({
  onMarkCorrect,
  flashCards,
  collections,
}) {
  const router = useRouter();

  console.log("FLASHCARDS_LENGTH_", flashCards.length);
  return (
    <>
      <StyledHeading>Flip Cards List</StyledHeading>
      <StyledList>
        {flashCards.map((card) => (
          <FlashCard
            key={card.id}
            card={card}
            onMarkCorrect={onMarkCorrect}
            collections={collections}
          />
        ))}
        {router.pathname === "/archive" && flashCards.length === 0 && (
          <p>No FlipCards archived.</p>
        )}
        {router.pathname === "/" && flashCards.length === 0 && (
          <p>All FlipCards are marked as correct.</p>
        )}
      </StyledList>
    </>
  );
}
