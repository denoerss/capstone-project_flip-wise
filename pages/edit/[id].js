import Form from "@/components/Form";
import { useRouter } from "next/router";

export default function Edit({ collections, flashCards, onSubmit }) {
  const router = useRouter();
  const { id } = router.query;

  const selectedFlashCard = flashCards.find((card) => card.id === id);

  return (
    <main>
      <h1>Edit the FlashCard</h1>
      <Form
        onSubmit={onSubmit}
        collections={collections}
        prevValues={{
          id: selectedFlashCard?.id || "",
          collectionId: selectedFlashCard?.collectionId || "",
          question: selectedFlashCard?.question || "",
          answer: selectedFlashCard?.answer || "",
          isCorrect: selectedFlashCard?.isCorrect || false,
        }}
      />
    </main>
  );
}
