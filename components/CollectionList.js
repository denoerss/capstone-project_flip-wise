import CollectionCard from "./CollectionCard";
import styled from "styled-components";
import { motion } from "motion/react";

const StyledList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding-left: 0;
  margin-bottom: 80px;
`;

const StyledEmptyListMessage = styled.p`
  white-space: pre-line;
  text-align: center;
  line-height: 5;
  margin-top: 5rem;
`;

export default function CollectionList({ collections, urlBase, countType }) {
  return (
    <>
      <StyledList initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {collections.map((collection) => (
          <CollectionCard
            key={collection.id}
            href={`/${urlBase}/${collection.id}`}
            collectionTitle={collection.title}
            color={collection.color}
            collection={collection}
            count={
              countType === "total"
                ? collection.totalCards
                : collection.likedCards
            }
          />
        ))}
      </StyledList>
      {collections.length === 0 && (
        <StyledEmptyListMessage>No collections found.</StyledEmptyListMessage>
      )}
    </>
  );
}
