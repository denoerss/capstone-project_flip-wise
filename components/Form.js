import Button from "./Button";
import styled from "styled-components";
import { uid } from "uid";
import { useState } from "react";
import { useRouter } from "next/router";

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

export default function Form({
  onAddFlashCard,
  onEditFlashCard,
  collections,
  prevValues,
}) {
  const router = useRouter();

  const [confirmMessage, setConfirmMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newFlashCard = {
      id: uid(),
      ...data,
      isCorrect: false,
    };

    const cardToEdit = {
      ...prevValues,
      ...data,
    };

    setConfirmMessage(onAddFlashCard ? "New Card Created." : "Card Updated.");

    // set form functionality for both cases (add and update card)
    onAddFlashCard ? onAddFlashCard(newFlashCard) : onEditFlashCard(cardToEdit);
    // redirect router on update card
    onEditFlashCard && router.back();
    // reset form on add new card
    onAddFlashCard && event.target.reset();
  }

  function handleCancel(event) {
    event.preventDefault();
    event.target.form.reset();
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="question">Question*</label>
          <input
            type="text"
            id="question"
            name="question"
            required
            defaultValue={prevValues?.question || ""}
          />
        </div>

        <div>
          <label htmlFor="answer">Answer*</label>
          <input
            type="text"
            id="answer"
            name="answer"
            required
            defaultValue={prevValues?.answer || ""}
          />
        </div>

        <div>
          <label htmlFor="collections">Collection*</label>
          <select
            id="collections"
            name="collectionId"
            required
            defaultValue={prevValues?.collectionId || ""}
          >
            <option disabled value="">
              - please select a collection -
            </option>
            {collections.map((collection) => (
              <option key={collection.id} value={collection.id}>
                {collection.title}
              </option>
            ))}
          </select>
        </div>

        <SmallText>*required</SmallText>

        <Button>{onAddFlashCard ? "Create" : "Update"}</Button>

        {router.pathname === "/edit" ? null : (
          <Button onClick={handleCancel}>Cancel</Button>
        )}

        {confirmMessage && <SubmitMessage>{confirmMessage}</SubmitMessage>}
      </StyledForm>
    </>
  );
}
