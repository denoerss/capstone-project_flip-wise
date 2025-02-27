import { useRouter } from "next/router";
import FlashCardList from "@/components/FlashCardList";
import styled from "styled-components";

const StyledHeading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
`;

export default function ArchiveCollection({
  onLiked,
  deleteCard,
  flashCards,
  collections,
}) {
  const router = useRouter();
  const { id } = router.query;

  const currentCollection = collections.find(
    (collection) => collection.id === id
  );

  if (!currentCollection) {
    return null;
  }

  const archivedFlashCards = flashCards.filter((card) => card.isCorrect);

  const filteredFlashCards = archivedFlashCards.filter(
    (card) => card.collectionId === currentCollection.id
  );

  return (
    <main>
      <StyledHeading>FlipWise</StyledHeading>
      <FlashCardList
        onLiked={onLiked}
        deleteCard={deleteCard}
        flashCards={filteredFlashCards}
        collections={collections}
        urlBase={"archive"}
        currentCollection={currentCollection}
      />
    </main>
  );
}
