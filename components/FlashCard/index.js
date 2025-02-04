import { flashcards } from "@/lib/data";
import { collections } from "@/lib/data";

export default function FlashCard() {
  return (
    <div>
      <p>{collections.title}</p>
      <p>{flashcards.question}</p>
      <p>{flashcards.answer}</p>
    </div>
  );
}
