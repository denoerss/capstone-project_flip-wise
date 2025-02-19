import FlashCardList from "@/components/FlashCardList";

export default function ArchivePage({
  onMarkCorrect,
  deleteCard,
  flashCards,
  collections,
  noCards,
}) {
  return (
    <main>
      <h1>Archive</h1>
      <FlashCardList
        onMarkCorrect={onMarkCorrect}
        deleteCard={deleteCard}
        flashCards={flashCards.filter((card) => card.isCorrect)}
        collections={collections}
        emptyListMessage={
          noCards
            ? "No FlipCards left.\nClick on 'New Card' below to add new FlipCards."
            : "No FlipCards archived."
        }
      />
    </main>
  );
}
