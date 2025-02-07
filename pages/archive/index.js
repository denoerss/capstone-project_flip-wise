import FlashCardList from "@/components/FlashCardList";

export default function ArchivePage({
  onMarkCorrect,
  flashCards,
  collections,
}) {
  return (
    <main>
      <h1>Archive</h1>
      <FlashCardList
        onMarkCorrect={onMarkCorrect}
        flashCards={flashCards}
        collections={collections}
        emptyListMessage="No FlipCards archived."
      />
    </main>
  );
}
