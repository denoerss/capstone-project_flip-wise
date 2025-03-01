import FlashCardList from "@/components/FlashCardList";
import styled from "styled-components";

const StyledHeadline = styled.h1`
  display: flex;
  justify-content: center;
`;

export default function ArchivePage({
  onLiked,
  deleteCard,
  flashCards,
  collections,
}) {
  const archivedFlashCards = flashCards.filter((card) => card.isLiked);

  return (
    <main>
      <StyledHeadline>Likes</StyledHeadline>
      <FlashCardList
        onLiked={onLiked}
        deleteCard={deleteCard}
        flashCards={archivedFlashCards}
        collections={collections}
        urlBase={"likes"}
      />
    </main>
  );
}
