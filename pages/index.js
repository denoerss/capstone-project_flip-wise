import FlashCardList from "@/components/FlashCardList";
import { useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  text-align: center;
  font-size: 2.5rem;
`;

export default function HomePage() {
  const [isCorrect, setIsCorrect] = useState(false);
  function handleMarkCorrect() {
    setIsCorrect(!isCorrect);
  }

  return (
    <main>
      <StyledHeader>FlipWise</StyledHeader>
      <FlashCardList onMarkCorrect={handleMarkCorrect} isCorrect={isCorrect} />
    </main>
  );
}
