import { useState } from "react";
import FlashCard from "./FlashCard";
import Link from "next/link";
import styled from "styled-components";

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
  urlBase,
  flashCards,
  deleteCard,
  onMarkCorrect,
  collections,
  currentCollection,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div>
        <StyledHeading onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {currentCollection ? currentCollection.title : "Select a collection"}⏷
        </StyledHeading>

        {isDropdownOpen && (
          <ul>
            {collections.map((collection) => (
              <Link key={collection.id} href={`/${urlBase}/${collection.id}`}>
                {collection.title}
              </Link>
            ))}
          </ul>
        )}
      </div>

      <StyledList>
        {flashCards.map((card) => (
          <FlashCard
            key={card.id}
            card={card}
            onMarkCorrect={onMarkCorrect}
            collections={collections}
            deleteCard={deleteCard}
          />
        ))}
      </StyledList>

      {flashCards.length === 0 && (
        <StyledEmptyListMessage>No cards found.</StyledEmptyListMessage>
      )}
    </>
  );
}
