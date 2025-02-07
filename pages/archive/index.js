import FlashCardList from "@/components/FlashCardList";

export default function ArchivePage({
  onMarkCorrect,
  deleteCard,
  flashCards,
  collections,
}) {
  return (
    <main>
      <h1>Archive</h1>
      <FlashCardList
        onMarkCorrect={onMarkCorrect}
        deleteCard={deleteCard}
        flashCards={flashCards}
        collections={collections}
        emptyListMessage="No FlipCards archived."
      />
    </main>
  );
}
