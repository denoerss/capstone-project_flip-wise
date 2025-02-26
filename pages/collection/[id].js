import { useRouter } from "next/router";
import FlashCardList from "@/components/FlashCardList";
import Link from "next/link";

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
      <Link href={`/play-mode/${id}`}>PlayMode</Link>
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
