import { flashcards } from "@/lib/data";
import { collections } from "@/lib/data";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding-left: 0px;
`;

const StyledCard = styled.li`
  background-color: lightgray;
  list-style: none;
  width: 80%;
  border-radius: 20px;
  padding: 25px 25px 5px 25px;
  line-height: 1.25;
`;

const StyledQuestion = styled.p`
  font-size: 1.75rem;
  font-weight: 600;
`;

const StyledAnswer = styled.p`
  font-size: 1.35rem;
`;

const StyledHeading = styled.h2`
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

export default function FlashCardList() {
  return (
    <StyledList>
      <StyledHeading>Flip Cards List</StyledHeading>
      {flashcards.map(({ id, question, answer, collectionId }) => (
        <StyledCard key={id}>
          <p>
            {
              collections.find((collection) => collectionId === collection.id)
                ?.title
            }
          </p>
          <StyledQuestion>{question}</StyledQuestion>
          <StyledAnswer>{answer}</StyledAnswer>
        </StyledCard>
      ))}
    </StyledList>
  );
}
