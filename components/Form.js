import Button from "./Button";
import { collections } from "@/lib/data";
import styled from "styled-components";
import { uid } from "uid";
import { useState } from "react";

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

const SubmitMessage = styled.p`
  text-align: center;
`;

export default function Form({ onAddFlashCard }) {
  const [isCardCreatedMessage, setIsCardCreatedMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setIsCardCreatedMessage("New Card Created.");

    const formElements = event.target.elements;

    const formAnswer = formElements.answer.value;
    const formQuestion = formElements.question.value;
    const selectedCollectionTitle = formElements.collections.value;

    const collectionId =
      collections.find(
        (collection) => collection.title === selectedCollectionTitle
      )?.id || null;

    const newFlashCard = {
      id: uid,
      collectionId: collectionId,
      answer: formAnswer,
      question: formQuestion,
      isCorrect: false,
    };

    onAddFlashCard(newFlashCard);

    event.target.reset();
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

        <Button>Submit</Button>

        <SubmitMessage>{isCardCreatedMessage}</SubmitMessage>
      </StyledForm>
    </>
  );
}
