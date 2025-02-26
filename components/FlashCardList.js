import { useState } from "react";
import FlashCard from "./FlashCard";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "motion/react";

const StyledList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding-left: 0;
  margin-bottom: 100px;
`;

const StyledDropdownButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.75rem;
  font-weight: bold;
  margin: 40px 10px 10px 10px;
  text-decoration: none;
  background-color: transparent;
  border: none;
`;

const StyledEmptyListMessage = styled.p`
  white-space: pre-line;
  text-align: center;
  line-height: 5;
  margin-top: 5rem;
`;

const StyledDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  gap: 5px;
`;

const StyledDropdownItem = styled.li`
  list-style: none;
  line-height: 2;
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
      <StyledDropdownContainer>
        <StyledDropdownButton
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          aria-expanded={isDropdownOpen}
          aria-controls="dropdown-menu"
        >
          {currentCollection ? currentCollection.title : "Select a collection"}{" "}
          ⏷
        </StyledDropdownButton>
        {isDropdownOpen && (
          <StyledDropdownList id="dropdown-menu">
            {collections.map((collection) => (
              <StyledDropdownItem
                key={collection.id}
                onClick={() => setIsDropdownOpen(false)}
              >
                <StyledLink href={`/${urlBase}/${collection.id}`}>
                  {collection.title}
                </StyledLink>
              </StyledDropdownItem>
            ))}
          </StyledDropdownList>
        )}
      </StyledDropdownContainer>

      <StyledList initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
