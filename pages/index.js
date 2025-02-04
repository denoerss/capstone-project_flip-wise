// import FlashCard from "@/components/FlashCard";
import { flashcards } from "@/lib/data";
import { collections } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <h1>FlipWise</h1>
      <ul>
        {flashcards.map(({ id, question, answer, collectionId }) => (
          <li key={id}>
            {
              collections.find((collection) => collectionId === collection.id)
                ?.title
            }
            <p>{question}</p>
            <p>{answer}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
