import CreateNav from "@/components/CreateNav";
import { useState } from "react";
import styled from "styled-components";
import Button from "@/components/Button";

const StyledHeadline = styled.h1`
  display: flex;
  justify-content: center;
`;

const StyledFormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  padding: 3em;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
  gap: 10px;
`;

const StyledColors = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  background-color: ${(prop) => prop.$inputColor};
`;

const StyledColorPicker = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 50px;
`;

export default function CollectionForm({ onSubmitCollection }) {
  const [collectionColor, setCollectionColor] = useState("#ffffff");
  const initialColors = ["#c28375", "#DAF7A6", "#75c297", "#7597c2", "#ab75c2"];

  function handleCancel(event) {
    event.preventDefault();
    event.target.form.reset(); // reset the form
  }

  return (
    <>
      <StyledHeadline>Create</StyledHeadline>
      <CreateNav />
      <StyledFormContainer>
        <StyledForm onSubmit={onSubmitCollection}>
          <label htmlFor="title" required>
            Title:
          </label>
          <input type="text" id="title" name="title" required />

          <label htmlFor="colorPicker">Color:</label>
          <StyledColorPicker>
            {initialColors.map((color, index) => (
              <StyledColors
                type="button"
                aria-label="color-picker"
                $inputColor={color}
                key={index}
                onClick={() => setCollectionColor(color)}
              ></StyledColors>
            ))}
            <input
              type="color"
              name="color"
              id="color"
              value={collectionColor}
              onChange={(event) => setCollectionColor(event.target.value)}
              required
            />
          </StyledColorPicker>
          <StyledButtonContainer>
            <Button type="submit" onClick={handleCancel}>
              Reset
            </Button>
            <Button type="button" buttonVariant="create">
              Create
            </Button>
          </StyledButtonContainer>
        </StyledForm>
      </StyledFormContainer>
    </>
  );
}
