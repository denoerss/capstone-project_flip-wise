import Form from "@/components/Form";

export default function Create({ onSubmit, collections }) {
  return (
    <main>
      <h1>Create new FlashCard</h1>
      <Form onSubmit={onSubmit} collections={collections} />;
    </main>
  );
}
