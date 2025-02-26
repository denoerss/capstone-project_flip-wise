import PlayModeCard from "@/components/PlayModeCard";
import { useRouter } from "next/router";

export default function PlayMode({
  onMarkCorrect,
  flashCards,
  currentCollection,
}) {
  const router = useRouter();
  const { id } = router.query;

  const filteredFlashCards = flashCards.filter(
    (card) => card.collectionId === currentCollection.id
  );

  const currentCard = filteredFlashCards.find((card) => card.id === id);
  const maxPage = filteredFlashCards.length;

  return (
    <>
      <h1>{currentCollection.title}</h1>
      <PlayModeCard card={currentCard} onMarkCorrect={onMarkCorrect} />
      <p>
        {currentCard.id} / {maxPage}
      </p>
    </>
  );
}
