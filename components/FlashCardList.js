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
  currentCollection,
  onMarkCorrect,
  deleteCard,
  flashCards,
  collections,
  emptyListMessage,
}) {

  const filteredFlashCards = currentCollection 
  ? flashCards.filter((card) => card.collectionId === currentCollection.id
  ): flashCards;

  return (
    <>
      <StyledHeading>{currentCollection ? currentCollection.title : "Archived Cards" }</StyledHeading>
      <StyledList>
        {filteredFlashCards.map((card) => (
            <FlashCard
              key={card.id}
              card={card}
              onMarkCorrect={onMarkCorrect}
              collections={collections}
              deleteCard={deleteCard}
              flashCards={flashCards}
            />
          ))}           
      </StyledList>
      {filteredFlashCards.length === 0 && (
        <StyledEmptyListMessage>{emptyListMessage}</StyledEmptyListMessage>
      )}
    </>
  );
}
