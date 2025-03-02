import FlashCardList from "@/components/FlashCardList";
import CollectionList from "@/components/CollectionList";
import Button from "@/components/Button";
import styled from "styled-components";
import { useState } from "react";

const StyledHeader = styled.header`
  height: 80px;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
`;

const StyledHeadline = styled.h1`
  display: flex;
  justify-content: center;
`;

export default function LikedPage({
  onLiked,
  deleteCard,
  flashCards,
  collections,
}) {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [showAllLikedCards, setShowAllLikedCards] = useState(false);

  const likedCards = flashCards.filter((card) => card.isLiked);

  const collectionsWithLikedCards = collections.filter((collection) =>
    likedCards.find((card) => card.collectionId === collection.id)
  );

  const filteredFlashCards = selectedCollection
    ? likedCards.filter((card) => card.collectionId === selectedCollection.id)
    : [];

  return (
    <main>
      <StyledHeader>
        <h1>Likes</h1>
        <Button
          buttonVariant={showAllLikedCards ? "allCardsActive" : "allCards"}
          onClick={() => {
            setShowAllLikedCards(!showAllLikedCards);
            setSelectedCollection(null); // Reset selected collection when toggling all cards
          }}
        >
          All Cards
        </Button>
      </StyledHeader>

      {showAllLikedCards ? (
        <FlashCardList
          onLiked={onLiked}
          deleteCard={deleteCard}
          flashCards={likedCards}
          collections={collections}
          urlBase={"likes"}
        />
      ) : selectedCollection ? (
        <>
          {/* <Button onClick={}>← Back</Button> */}
          <FlashCardList
            onLiked={onLiked}
            deleteCard={deleteCard}
            filteredFlashCards={filteredFlashCards}
            collections={collections}
          />
        </>
      ) : (
        <CollectionList
          collections={collectionsWithLikedCards}
          emptyListMessage="No collections with liked cards."
          urlBase={"likes"}
        />
      )}
    </main>
  );
}
