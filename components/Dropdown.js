import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const StyledDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export default function Dropdown({ urlBase, collections, currentCollection }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <StyledDropdownContainer>
      <StyledDropdownButton
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        aria-expanded={isDropdownOpen}
        aria-controls="dropdown-menu"
      >
        {currentCollection ? currentCollection.title : "Select a collection"} ⏷
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
  );
}
