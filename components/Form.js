import Button from "./Button";
import styled from "styled-components";
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
      <StyledForm onSubmit={(e)=> {
        onSubmit(e, prevValues?.id), 
        setConfirmMessage(true)
        }} >
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

        <Button>{prevValues?.id ? "Update" : "Create"}</Button>
        {router.pathname === "/edit" ? null : (
          <Button onClick={handleCancel}>Cancel</Button>
        )}

        {confirmMessage &&  <SubmitMessage>{prevValues?.id ? "Card Updated." : "New Card Created."}</SubmitMessage>      }
      </StyledForm>
    </>
  );
}
