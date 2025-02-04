import FlashCardList from "@/components/FlashCardList";
import styled from "styled-components";

const StyledHeader = styled.h1`
  text-align: center;
  font-size: 2.5rem;
`;

export default function HomePage() {
  return (
    <main>
      <StyledHeader>FlipWise</StyledHeader>
      <FlashCardList />
    </main>
  );
}
