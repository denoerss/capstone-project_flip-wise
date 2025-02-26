import { useRouter } from "next/router";
import FlashCardList from "@/components/FlashCardList";
import styled from "styled-components";

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

  const filteredFlashCards = flashCards.filter(
    (card) => card.collectionId === currentCollection.id
  );

  return (
    <main>
      <FlashCardList
        onMarkCorrect={onMarkCorrect}
        deleteCard={deleteCard}
        flashCards={filteredFlashCards}
        collections={collections}
        urlBase={"collection"}
        currentCollection={currentCollection}
      />
    </main>
  );
}
