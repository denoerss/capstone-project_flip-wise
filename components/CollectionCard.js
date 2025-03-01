import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

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
  padding: 16px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  color: rgb(17, 17, 17);
  text-decoration: none;
  filter: drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.1));
  &:hover {
    cursor: pointer;
  }
  background-color: ${(prop) => prop.$inputColor};
`;
const StyledEditButton = styled.button`
  background-color: transparent;
  border: 1px solid #111111;
  min-width: 80px;
  border-radius: 24px;
  font-size: 1.25rem;
  color: rgb(17, 17, 17);
  text-decoration: none;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const StyledCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function CollectionCard({
  href,
  collectionTitle,
  totalCards,
  likedCards,
  color,
  collection,
}) {
  const router = useRouter();

  return (
    <StyledCollectionContainer>
      <StyledCollectionLink href={href} $inputColor={color}>
        <h2>{collectionTitle}</h2>
        <StyledCardInfo>
          <StyledEditButton
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              router.push(`/edit/collection/${collection.id}`);
            }}
          >
            edit
          </StyledEditButton>
          <p>{totalCards} cards</p>
        </StyledCardInfo>
      </StyledCollectionLink>
    </StyledCollectionContainer>
  );
}
