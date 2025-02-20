import CollectionCard from "./CollectionCard";
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

export default function CollectionList({ collections }) {
  return (
    <>
      <StyledHeading>Collections</StyledHeading>
      <StyledList>
        {collections.map((collection) => (
          <CollectionCard
            key={collection.id}
            href={`/collection/${collection.id}`}
            collectionTitle={collection.title}
            totalCards={collection.totalCards}
            correctCards={collection.correctCards}
          />
        ))}
      </StyledList>
      {collections.length === 0 && (
        <StyledEmptyListMessage>No collections found.</StyledEmptyListMessage>
      )}
    </>
  );
}
