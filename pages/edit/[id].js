import Form from "@/components/Form";
import { useRouter } from "next/router";

export default function Edit({ onEditFlashCard, collections, flashCards }) {
  const router = useRouter();
  const { id } = router.query;
  const selectedFlashCard = flashCards.find((card) => card.id === id);

  return (
    <main>
      <h1>Edit the FlashCard</h1>
      <Form onEditFlashCard={onEditFlashCard} collections={collections} />;
    </main>
  );
}
