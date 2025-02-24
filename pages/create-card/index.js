import Form from "@/components/Form";
import CreateNav from "@/components/CreateNav";
import styled from "styled-components";

const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
`;

export default function Create({ onSubmit, collections }) {
  return (
    <main>
      <StyledHeader>Create</StyledHeader>
      <CreateNav />
      <Form onSubmit={onSubmit} collections={collections} />
    </main>
  );
}
