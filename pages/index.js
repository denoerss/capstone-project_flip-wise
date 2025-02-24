import CollectionList from "@/components/CollectionList";
import styled from "styled-components";

const StyledHeadline = styled.h1`
  text-align: center;
`;

export default function HomePage({ collections }) {
  return (
    <main>
      <StyledHeadline>Collections</StyledHeadline>
      <CollectionList
        collections={collections}
        emptyListMessage="No Collections available."
      />
    </main>
  );
}
