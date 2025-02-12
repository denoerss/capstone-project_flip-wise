import Button from "./Button";
import styled from "styled-components";
import { uid } from "uid";
import { useState } from "react";

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

export default function Form({ onAddFlashCard, collections }) {
  const [isCardCreatedMessage, setIsCardCreatedMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setIsCardCreatedMessage("New Card Created.");

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newFlashCard = {
      id: uid(),
      ...data,
      isCorrect: false,
    };

    onAddFlashCard(newFlashCard);

    event.target.reset();
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="question">Question*</label>
          <input type="text" id="question" name="question" required />
        </div>

        <div>
          <label htmlFor="answer">Answer*</label>
          <input type="text" id="answer" name="answer" required />
        </div>

        <div>
          <label htmlFor="collections">Collection*</label>
          <select id="collections" name="collectionId" required>
            {collections.map((collection) => (
              <option key={collection.id} value={collection.id}>
                {collection.title}
              </option>
            ))}
          </select>
        </div>

        <SmallText>*required</SmallText>

        <Button>Submit</Button>

        {isCardCreatedMessage && (
          <SubmitMessage>{isCardCreatedMessage}</SubmitMessage>
        )}
      </StyledForm>
    </>
  );
}
