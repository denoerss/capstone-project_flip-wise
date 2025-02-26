import CollectionList from "@/components/CollectionList";
import styled from "styled-components";
import Button from "@/components/Button";

const StyledHeader = styled.header`
  height: 80px;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
`;

export default function HomePage({ collections }) {
  return (
    <main>
      <StyledHeader>
        <h1>Collections</h1>
        <Button buttonVariant="allCards">all cards</Button>
      </StyledHeader>
      <CollectionList
        collections={collections}
        emptyListMessage="No Collections available."
      />
    </main>
  );
}
