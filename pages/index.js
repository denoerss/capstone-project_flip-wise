import CollectionList from "@/components/CollectionList";
import styled from "styled-components";
import Button from "@/components/Button";
import FlashCardList from "@/components/FlashCardList";
import { useState } from "react";

const StyledHeader = styled.header`
  color: var(--black);
  height: 85px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 45px;
  border-radius: 0 0 24px 24px;
`;

export default function HomePage({ flashCards, collections, onLiked }) {
  const [showAllCards, setShowAllCards] = useState(false);

  return (
    <main>
      <StyledHeader>
        <h1>Collections</h1>
        <Button
          buttonVariant={showAllCards ? "black" : null}
          onClick={() => setShowAllCards(!showAllCards)}
        >
          all cards
        </Button>
      </StyledHeader>
      {showAllCards ? (
        <FlashCardList
          onLiked={onLiked}
          flashCards={flashCards}
          collections={collections}
          urlBase={"/collection"}
        />
      ) : (
        <CollectionList
          collections={collections}
          emptyListMessage="No Collections available."
          urlBase={"collection"}
          countType="total"
        />
      )}
    </main>
  );
}
