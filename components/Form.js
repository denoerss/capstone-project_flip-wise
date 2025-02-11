import Button from "./Button";
import { collections } from "@/lib/data";
import styled from "styled-components";

const StyledFormContainer = styled.div``;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 1em 2em;
`;

const SmallText = styled.p`
  font-size: 0.8rem;
`;

export default function Form() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newFlashCard = {
      question: data.question,
      answer: data.answer,
      collection: data.collection,
    };
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormContainer>
          <label htmlFor="question">Question*</label>
          <input type="text" id="question" required></input>
        </StyledFormContainer>

        <StyledFormContainer>
          <label htmlFor="answer">Answer*</label>
          <input type="text" id="answer" required></input>
        </StyledFormContainer>

        <StyledFormContainer>
          <label htmlFor="collections">Collection*</label>
          <select id="collections" required>
            {collections.map((collection) => (
              <option key={collection.id}>{collection.title}</option>
            ))}
          </select>
        </StyledFormContainer>

        <SmallText>*required</SmallText>

        <Button name="Submit" />
      </StyledForm>
    </>
  );
}
