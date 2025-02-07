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

export default function FlashCardList({
  onMarkCorrect,
  deleteCard,
  flashCards,
  collections,
  emptyListMessage,
}) {
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
            deleteCard={deleteCard}
          />
        ))}
        {flashCards.length === 0 && <p>{emptyListMessage}</p>}
      </StyledList>
    </>
  );
}
