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

const StyledHeadline = styled.h1`
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

const StyledLinkContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
  margin-left: 0;
  gap: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
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
      <div style={{ margin: "0" }}>
        <StyledHeadline onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {currentCollection ? currentCollection.title : "Select a collection"}{" "}
          ⏷
        </StyledHeadline>

        {isDropdownOpen && (
          <StyledLinkContainer>
            {collections.map((collection) => (
              <StyledLink
                key={collection.id}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                href={`/${urlBase}/${collection.id}`}
              >
                {collection.title}
              </StyledLink>
            ))}
          </StyledLinkContainer>
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
