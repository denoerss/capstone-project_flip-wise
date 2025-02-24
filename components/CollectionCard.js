import styled from "styled-components";
import { useRouter } from "next/router";

const StyledCollectionContainer = styled.li`
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
`;

const StyledCollectionCard = styled.div``;

export default function CollectionCard({
  href,
  collectionTitle,
  totalCards,
  correctCards,
  color,
}) {
  const router = useRouter();
  return (
    <StyledCollectionContainer
      onClick={() => router.push(`/${href}`)}
      style={{ backgroundColor: `${color}` }}
    >
      <StyledCollectionCard>
        <h2>{collectionTitle}</h2>
        <p>
          {correctCards} / {totalCards} correct
        </p>
      </StyledCollectionCard>
    </StyledCollectionContainer>
  );
}
