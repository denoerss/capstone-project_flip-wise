import Form from "@/components/Form";

export default function Create({ onAddFlashCard, collections }) {
  return (
    <main>
      <h1>Create new FlashCard</h1>
      <Form onAddFlashCard={onAddFlashCard} collections={collections} />;
    </main>
  );
}
