import Form from "@/components/Form";

export default function Create({ onAddFlashCard }) {
  return (
    <main>
      <h1>Create new FlashCard</h1>
      <Form onAddFlashCard={onAddFlashCard} />;
    </main>
  );
}
