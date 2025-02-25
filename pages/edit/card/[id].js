import Form from "@/components/Form";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
`;

export default function Edit({ collections, flashCards, onSubmit }) {
  const router = useRouter();
  const { id } = router.query;

  const selectedFlashCard = flashCards.find((card) => card.id === id);

  return (
    <main>
      <StyledHeader>Edit</StyledHeader>
      <Form
        onSubmit={onSubmit}
        collections={collections}
        prevValues={{
          id: selectedFlashCard?.id || "",
          collectionId: selectedFlashCard?.collectionId || "",
          question: selectedFlashCard?.question || "",
          answer: selectedFlashCard?.answer || "",
          isCorrect: selectedFlashCard?.isCorrect || false,
        }}
      />
    </main>
  );
}
