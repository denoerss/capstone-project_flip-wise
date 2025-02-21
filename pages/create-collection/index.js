import CreateNav from "@/components/CreateNav";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import styled from "styled-components";
import Button from "@/components/Button";

const StyledFormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  gap: 10px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
  gap: 10px;
`;

const StyledColors = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50px;
  cursor: pointer;
`;

const StyledColorPicker = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export default function CreateCollection({ onSubmitCollection }) {
  const [collectionColor, setCollectionColor] = useState("#ffffff");
  const initialColors = ["#c28375", "#DAF7A6", "#75c297", "#7597c2", "#ab75c2"];

  return (
    <>
      <CreateNav />
      <h1>Create new Collection</h1>
      <StyledFormContainer>
        <StyledForm onSubmit={onSubmitCollection}>
          <label htmlFor="title" required>
            Enter a collection title:
          </label>
          <input type="text" id="title" name="title" />

          <StyledColorPicker>
            {initialColors.map((color) => (
              <StyledColors
                key={initialColors.index}
                style={{ backgroundColor: color }}
                onClick={() => setCollectionColor(color)}
              ></StyledColors>
            ))}
            <label htmlFor="colorPicker"></label>
            <input
              type="color"
              name="color"
              id="color"
              value={collectionColor}
              onChange={(event) => setCollectionColor(event.target.value)}
              required
            />
          </StyledColorPicker>
          <Button>Create</Button>
          <Button>Reset</Button>
        </StyledForm>
      </StyledFormContainer>
      <Navigation />
    </>
  );
}
