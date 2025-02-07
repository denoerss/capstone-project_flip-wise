import FlashCardList from "@/components/FlashCardList";

export default function archive({ onMarkCorrect, flashCards, collections }) {
  return (
    <>
      <h1>Archive</h1>
      <FlashCardList
        onMarkCorrect={onMarkCorrect}
        flashCards={flashCards}
        collections={collections}
        emptyListMessage="No FlipCards archived."
      />
    </>
  );
}
