import Link from "next/link";

export default function CreateNav() {
  return (
    <nav>
      <Link href={"/create-card"}>Create Card</Link>
      <Link href={"/create-collection"}>Create Collection</Link>
    </nav>
  );
}
