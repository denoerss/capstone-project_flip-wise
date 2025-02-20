import FlashCardList from "@/components/FlashCardList";

export default function ArchivePage({
  onMarkCorrect,
  deleteCard,
  flashCards,
  collections,
}) {
  const archivedFlashCards = flashCards.filter((card) => card.isCorrect);

  return (
    <main>
      <h1>Archive</h1>
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
