import FlashCard from "./FlashCard";
import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding-left: 0;
`;

const StyledHeading = styled.h2`
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StyledEmptyListMessage = styled.p`
  white-space: pre-line;
  text-align: center;
  line-height: 5;
  margin-top: 5rem;
`;

export default function FlashCardList({
  currentCollection,
  onMarkCorrect,
  deleteCard,
  flashCards,
  collections,
  emptyListMessage,
}) {
  const router = useRouter();
  const { pathname } = router;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [selectedCollection, setSelectedCollection] = useState("");

  const filteredFlashCards = currentCollection 
  ? flashCards.filter((card) => card.collectionId === currentCollection.id
  ): flashCards;

  return (
    <>
      <div>
        <StyledHeading onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {currentCollection ? currentCollection.title : "All Cards" } ⏷
        </StyledHeading>

        {isDropdownOpen && (
          <ul>
            {collections.map((collection) => (
              <p 
                key={collection.id}
                onClick={() => {
                  router.push(pathname.includes("/archive") ? `/archive/${collection.id}` : `/collection/${collection.id}`);
                  setIsDropdownOpen(false);
                }}
              >
                {collection.title}
              </p>
            ))}
          </ul>
        )}
      </div>
    
      <StyledList>
        {pathname.includes("/archive") 
          ? flashCards.map((card) => (
            <FlashCard
              key={card.id}
              card={card}
              onMarkCorrect={onMarkCorrect}
              collections={collections}
              deleteCard={deleteCard}
            />
          )) 
          : filteredFlashCards.map((card) => (
            <FlashCard
              key={card.id}
              card={card}
              onMarkCorrect={onMarkCorrect}
              collections={collections}
              deleteCard={deleteCard}
            />
          ))}      
      </StyledList>

      {filteredFlashCards.length === 0 && (
        <StyledEmptyListMessage>{emptyListMessage}</StyledEmptyListMessage>
      )}
    </>
  );
}
