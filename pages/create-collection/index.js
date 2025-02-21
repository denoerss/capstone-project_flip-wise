import BackButton from "@/components/BackButton";
import CreateNav from "@/components/CreateNav";

export default function CreateCollection() {
  return (
    <>
      <CreateNav />
      <h1>Create new Collection</h1>
      <BackButton url={"/"} />
    </>
  );
}
