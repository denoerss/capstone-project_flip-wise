import CollectionForm from "@/components/CollectionForm";
import CreateNav from "@/components/CreateNav";
import styled from "styled-components";

const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
`;

export default function CreateCollection({ onSubmitCollection }) {
  return (
    <main>
      <StyledHeader>Create</StyledHeader>
      <CreateNav />
      <CollectionForm onSubmitCollection={onSubmitCollection} />
    </main>
  );
}
