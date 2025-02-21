import Form from "@/components/Form";
import CreateNav from "@/components/CreateNav";
import Navigation from "@/components/Navigation";

export default function Create({ onSubmit, collections }) {
  return (
    <main>
      <CreateNav />
      <h1>Create new FlashCard</h1>
      <Form onSubmit={onSubmit} collections={collections} />
      <Navigation />
    </main>
  );
}
