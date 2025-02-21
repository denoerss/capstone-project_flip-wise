import Form from "@/components/Form";
import BackButton from "@/components/BackButton";
import CreateNav from "@/components/CreateNav";

export default function Create({ onSubmit, collections }) {
  return (
    <main>
      <CreateNav />
      <h1>Create new FlashCard</h1>
      <Form onSubmit={onSubmit} collections={collections} />
      <BackButton url={"/"} />
    </main>
  );
}
