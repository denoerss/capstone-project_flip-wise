import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

const StyledCollectionContainer = styled.li`
  list-style-type: none;
`;

const StyledCollectionLink = styled(Link)`
  position: relative;
  width: 80vw;
  list-style: none;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  color: rgb(17, 17, 17);
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
  background-color: ${(prop) => prop.$inputColor};
`;
const StyledEditButton = styled.button`
  position: absolute;
  right: 5px;
  bottom: 5px;
  background-color: rgb(149, 178, 246);
  min-width: 80px;
  padding: 0.9rem;
  border-style: none;
  border-radius: 10px;
  font-size: 1.3rem;
  color: rgb(17, 17, 17);
  text-decoration: none;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export default function CollectionCard({
  href,
  collectionTitle,
  totalCards,
  correctCards,
  color,
  collection,
}) {
  const router = useRouter();

  return (
    <StyledCollectionContainer>
      <StyledCollectionLink href={href} $inputColor={color}>
        <div>
          <h2>{collectionTitle}</h2>
          <p>
            {correctCards} / {totalCards} correct
          </p>
        </div>
        <StyledEditButton
          onClick={(event) => {
            event.stopPropagation();
            router.push(`/edit/collection/${collection.id}`);
          }}
        >
          Edit
        </StyledEditButton>
      </StyledCollectionLink>
    </StyledCollectionContainer>
  );
}
