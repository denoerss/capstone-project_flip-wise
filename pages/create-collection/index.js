import CollectionForm from "@/components/CollectionForm";
import styled from "styled-components";

const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
`;

export default function CreateCollection({ onSubmitCollection }) {
  return (
    <main>
      <StyledHeader>Create</StyledHeader>
      <CollectionForm onSubmitCollection={onSubmitCollection} />
    </main>
  );
}
