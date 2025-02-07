import { collections } from "@/lib/data";
import styled from "styled-components";

const StyledAnswer = styled.p`
  font-size: 1.75rem;
  font-weight: 600;
`;

export default function FlashCardBack({ answer, collectionId }) {
  return (
    <>
      <p>
        {
          collections.find((collection) => collectionId === collection.id)
            ?.title
        }
      </p>
      <StyledAnswer>{answer}</StyledAnswer>
    </>
  );
}
