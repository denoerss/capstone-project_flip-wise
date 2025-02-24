import Button from "@/components/Button";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useState } from "react";

const StyledDeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledWarning = styled.p`
  background-color: #ffa500;
  padding: 5px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const StyledConfirmContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export default function EditCollection({ collections }) {
  const router = useRouter();
  const { id } = router.query;

  const selectedCollection = collections.find(
    (collection) => collection.id === id
  );

  const [showDeleteButton, setShowDeleteButton] = useState(true);

  function handleToggleButton(event) {
    event.stopPropagation();
    setShowDeleteButton((prev) => !prev);
  }

  function handleConfirmDelete(event) {
    event.stopPropagation();
    setShowDeleteButton(true);
    deleteCollection(collection.id);
  }

  return (
    <>
      <StyledDeleteContainer>
        {showDeleteButton ? (
          <Button buttonVariant="delete" onClick={handleToggleButton}>
            Delete
          </Button>
        ) : (
          <>
            <StyledWarning>Delete Collection?</StyledWarning>
            <StyledConfirmContainer>
              <Button buttonVariant="confirm" onClick={handleConfirmDelete}>
                Confirm
              </Button>
              <Button buttonVariant="cancel" onClick={handleToggleButton}>
                Cancel
              </Button>
            </StyledConfirmContainer>
          </>
        )}
      </StyledDeleteContainer>
    </>
  );
}
