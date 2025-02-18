import FlashCard from "./FlashCard";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding-left: 0;
`;

const StyledHeading = styled.h2`
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StyledEmptyListMessage = styled.p`
  white-space: pre-line;
  text-align: center;
  line-height: 5;
  margin-top: 5rem;
`;

export default function FlashCardList({
  collectionCard_id,
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
        {flashCards
          .filter((card) => collectionCard_id === card.collectionId)
          .map((card) => (
            <FlashCard
              key={card.id}
              card={card}
              onMarkCorrect={onMarkCorrect}
              collections={collections}
              deleteCard={deleteCard}
            />
          ))}
      </StyledList>
      {flashCards.length === 0 && (
        <StyledEmptyListMessage>{emptyListMessage}</StyledEmptyListMessage>
      )}
    </>
  );
}
