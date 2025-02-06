import FlashCardList from "@/components/FlashCardList";

export default function archive({ onMarkCorrect, flashCards }) {
  return (
    <>
      <h1>Archive</h1>
      <FlashCardList onMarkCorrect={onMarkCorrect} flashCards={flashCards} />
    </>
  );
}
