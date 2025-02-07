import Form from "@/components/Form";

export default function Create({ handleSubmit }) {
  return (
    <main>
      <h1>Create new FlashCard</h1>
      <Form onSubmit={handleSubmit} />;
    </main>
  );
}
