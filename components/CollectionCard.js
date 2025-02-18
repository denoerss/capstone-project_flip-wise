import styled from "styled-components";
import Link from "next/link";

const StyledCollectionContainer = styled.li`
  background-color: ${({ $showAnswer }) =>
    $showAnswer ? "#A9A9A9" : "#D3D3D3"};
  position: relative;
  list-style: none;
  width: 80%;
  border-radius: 20px;
  padding: 25px 25px 25px;
  line-height: 1.25;
  &:hover {
    cursor: pointer;
  }
`;

const StyledCollectionCard = styled(Link)`
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

export default function CollectionCard({ href, collectionTitle }) {
  return (
    <StyledCollectionContainer>
      <StyledCollectionCard href={href}>
        <h2>{collectionTitle}</h2>
        <p>7/10 correct</p>
      </StyledCollectionCard>
    </StyledCollectionContainer>
  );
}
