import { useRouter } from "next/router";
import FlashCardList from "@/components/FlashCardList";
import styled from "styled-components";
import Navigation from "@/components/Navigation";

const StyledHeading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
`;

export default function Collection({
  onMarkCorrect,
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

  const activeFlashCards = flashCards.filter((card) => !card.isCorrect);

  const filteredFlashCards = activeFlashCards.filter(
    (card) => card.collectionId === currentCollection.id
  );

  return (
    <main>
      <StyledHeading>FlipWise</StyledHeading>
      <FlashCardList
        onMarkCorrect={onMarkCorrect}
        deleteCard={deleteCard}
        flashCards={filteredFlashCards}
        collections={collections}
        urlBase={"collection"}
        currentCollection={currentCollection}
      />
      <Navigation />
    </main>
  );
}
