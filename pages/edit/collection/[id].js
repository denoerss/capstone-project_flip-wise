import CollectionForm from "@/components/CollectionForm";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
`;

export default function EditCollection({ collections, onSubmitCollection }) {
  const router = useRouter();
  const { id } = router.query;

  const selectedCollection = collections.find(
    (collection) => collection.id === id
  );

  return (
    <main>
      <StyledHeader>Edit</StyledHeader>
      <CollectionForm
        onSubmitCollection={onSubmitCollection}
        collections={collections}
        prevValues={{
          id: selectedCollection?.id || "",
          title: selectedCollection?.title || "",
          color: selectedCollection?.color || "",
        }}
      />
    </main>
  );
}
