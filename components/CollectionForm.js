import { useState } from "react";
import styled from "styled-components";
import Button from "@/components/Button";

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
  width: 50vw;
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

const StyledColorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 20px;
  gap: 12px;
`;

const StyledColorPicker = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 45px;
  border-style: none;
  background-color: transparent;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 50px;
`;

const StyledSubmitMessage = styled.p`
  text-align: center;
`;

const StyledInput = styled.input`
  font-size: 16px;
  border-radius: 12px;
  padding: 8px;
  border: 1px solid var(--light-grey);
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  &:focus {
    outline: none;
    border: 1px solid #000;
  }
`;

export default function CollectionForm({ onSubmitCollection, prevValues }) {
  const [confirmMessage, setConfirmMessage] = useState("");
  const [collectionColor, setCollectionColor] = useState(
    prevValues?.color || "#d3edff"
  );
  const initialColors = [
    "#d3edff",
    "#b8dcff",
    "#92c5f0",

    "#e6b3ff",
    "#c889ff",
    "#a46fe1",

    "#ffc4e2",
    "#ff9de0",
    "#d87cbc",

    "#ffb3b5",
    "#f98b8d",
    "#d96a6e",

    "#ffb7a3",
    "#ffa58d",
    "#e07d69",

    "#fff7a3",
    "#eef88c",
    "#e3ee6a",

    "#c6e6c6",
    "#a0cfa0",
    "#83af83",
  ];

  function handleCancel(event) {
    event.preventDefault();
    event.target.form.reset(); // reset the form
    setCollectionColor(prevValues?.color || ""); // Reset color to previous value
  }

  return (
    <>
      <StyledFormContainer>
        <StyledForm
          onSubmit={(event) => {
            event.preventDefault();

            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData);

            onSubmitCollection(data, prevValues?.id);
            setConfirmMessage(true);

            event.target.reset();
          }}
        >
          <label htmlFor="title" required>
            Title:
          </label>
          <StyledInput
            type="text"
            id="title"
            name="title"
            defaultValue={prevValues?.title || ""}
            required
          />

          <label htmlFor="colorPicker">Color:</label>
          <StyledColorPicker
            type="color"
            name="color"
            id="color"
            value={collectionColor}
            onChange={(event) => setCollectionColor(event.target.value)}
            required
            disabled
          />
          <StyledColorsContainer>
            {initialColors.map((color) => (
              <StyledColors
                type="button"
                aria-label="color-picker"
                key={color}
                $inputColor={color}
                onClick={() => setCollectionColor(color)}
              />
            ))}
          </StyledColorsContainer>

          <StyledButtonContainer>
            <Button type="submit" onClick={handleCancel}>
              Reset
            </Button>
            <Button type="button" buttonVariant="create">
              {prevValues?.id ? "Update" : "Create"}
            </Button>
          </StyledButtonContainer>
        </StyledForm>

        {confirmMessage && (
          <StyledSubmitMessage>
            {!prevValues?.id && "Collection Created."}
          </StyledSubmitMessage>
        )}
      </StyledFormContainer>
    </>
  );
}
