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

const StyledEmptyListMessage = styled.p`
  white-space: pre-line;
  text-align: center;
  line-height: 5;
  margin-top: 5rem;
`;

export default function FlashCardList({
  flashCards,
  deleteCard,
  onMarkCorrect,
  collections,
}) {
  return (
    <>
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
      </StyledList>

      {flashCards.length === 0 && (
        <StyledEmptyListMessage>No cards found.</StyledEmptyListMessage>
      )}
    </>
  );
}
