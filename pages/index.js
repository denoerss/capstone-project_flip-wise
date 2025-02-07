import FlashCardList from "@/components/FlashCardList";
import styled from "styled-components";

const StyledHeader = styled.h1`
  text-align: center;
  font-size: 2.5rem;
`;

export default function HomePage({ onMarkCorrect, flashCards, collections }) {
  return (
    <main>
      <StyledHeader>FlipWise</StyledHeader>
      <FlashCardList
        onMarkCorrect={onMarkCorrect}
        flashCards={flashCards}
        collections={collections}
        emptyListMessage="All FlipCards are marked as correct."
      />
    </main>
  );
}
