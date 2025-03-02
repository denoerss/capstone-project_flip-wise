import Button from "./Button";
import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 1em 2em;
  width: 100vw;
`;

const StyledFormElement = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 250px;
`;

const SubmitMessage = styled.p`
  text-align: center;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 50px;
  gap: 24px;
`;

const StyledInput = styled.input`
  font-size: 16px;
  border-radius: 12px;
  padding: 8px;
  border: 1px solid #ccc;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  &:focus {
    outline: none;
    border: 1px solid #000;
  }
`;

export default function Form({
  onSubmit, // function to handle form submit for both add and edit mode
  collections,
  prevValues,
}) {
  const router = useRouter();
  const [confirmMessage, setConfirmMessage] = useState("");

  function handleCancel(event) {
    event.preventDefault();
    event.target.form.reset(); // reset the form
  }

  return (
    <>
      <StyledForm
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const data = Object.fromEntries(formData);
          onSubmit(data, prevValues?.id);
          setConfirmMessage(true);
          event.target.reset();
        }}
      >
        <StyledFormElement>
          <label htmlFor="question">Question:</label>
          <StyledInput
            type="text"
            id="question"
            name="question"
            required
            defaultValue={prevValues?.question || ""}
          />
        </StyledFormElement>

        <StyledFormElement>
          <label htmlFor="answer">Answer:</label>
          <StyledInput
            type="text"
            id="answer"
            name="answer"
            required
            defaultValue={prevValues?.answer || ""}
          />
        </StyledFormElement>

        <StyledFormElement>
          <label htmlFor="collections">Collection:</label>
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
        </StyledFormElement>

        <StyledButtonContainer>
          {router.pathname === "/edit" ? null : (
            <Button type="button" onClick={handleCancel}>
              Reset
            </Button>
          )}
          <Button type="submit" buttonVariant="create">
            {prevValues?.id ? "Update" : "Create"}
          </Button>
        </StyledButtonContainer>

        {confirmMessage && (
          <SubmitMessage>
            {prevValues?.id ? "Card Updated." : "New Card Created."}
          </SubmitMessage>
        )}
      </StyledForm>
    </>
  );
}
