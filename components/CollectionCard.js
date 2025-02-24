import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

const StyledCollectionContainer = styled.li`
  list-style-type: none;
`;

const StyledCollectionLink = styled(Link)`
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

export default function CollectionCard({
  href,
  collectionTitle,
  totalCards,
  correctCards,
  color,
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
      </StyledCollectionLink>
    </StyledCollectionContainer>
  );
}
