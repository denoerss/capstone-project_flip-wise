import FlashCardList from "@/components/FlashCardList";
import styled from "styled-components";

const StyledHeader = styled.h1`
  text-align: center;
  font-size: 2.5rem;
`;

export default function HomePage({
  onMarkCorrect,
  deleteCard,
  flashCards,
  collections,
  noCards,
}) {
  return (
    <main>
      <StyledHeader>FlipWise</StyledHeader>
      <FlashCardList
        onMarkCorrect={onMarkCorrect}
        deleteCard={deleteCard}
        flashCards={flashCards}
        collections={collections}
        emptyListMessage={
          noCards
            ? "No FlipCards left.\nClick on 'New Card' below to add new FlipCards."
            : "All FlipCards are marked as correct."
        }
      />
    </main>
  );
}
