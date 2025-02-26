import FlashCardList from "@/components/FlashCardList";
import styled from "styled-components";

const StyledHeadline = styled.h1`
  display: flex;
  justify-content: center;
`;

export default function ArchivePage({
  onMarkCorrect,
  deleteCard,
  flashCards,
  collections,
}) {
  const archivedFlashCards = flashCards.filter((card) => card.isCorrect);

  return (
    <main>
      <StyledHeadline>Likes</StyledHeadline>
      <FlashCardList
        onMarkCorrect={onMarkCorrect}
        deleteCard={deleteCard}
        flashCards={archivedFlashCards}
        collections={collections}
        urlBase={"archive"}
      />
    </main>
  );
}
