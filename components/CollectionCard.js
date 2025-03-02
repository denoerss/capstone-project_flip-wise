import styled from "styled-components";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/router";

const StyledCollectionContainer = styled.li`
  list-style-type: none;
  margin-bottom: -50px;
  transition: margin-bottom 0.2s ease-in-out;
  &:hover {
    margin-bottom: -40px;
  }
`;

const StyledCollectionLink = styled(Link)`
  position: relative;
  width: 95vw;
  height: 200px;
  list-style: none;
  padding: 0 25px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  color: var(--black);
  text-decoration: none;
  filter: drop-shadow(0px -4px 4px var(--black 0.1));
  &:hover {
    cursor: pointer;
  }
  background-color: ${(prop) => prop.$inputColor};
`;

const StyledCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledCardCount = styled.p`
  font-style: italic;
`;

export default function CollectionCard({
  href,
  collectionTitle,
  color,
  collection,
  count,
}) {
  const router = useRouter();

  return (
    <StyledCollectionContainer>
      <StyledCollectionLink href={href} $inputColor={color}>
        <h2>{collectionTitle}</h2>
        <StyledCardInfo>
          <Button
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              router.push(`/edit/collection/${collection.id}`);
            }}
          >
            edit
          </Button>
          <StyledCardCount>
            {count} {count === 1 ? "card" : "cards"}
          </StyledCardCount>
        </StyledCardInfo>
      </StyledCollectionLink>
    </StyledCollectionContainer>
  );
}
