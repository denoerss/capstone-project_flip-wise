import CollectionList from "@/components/CollectionList";
import styled from "styled-components";

const StyledHeading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
`;

export default function HomePage({ collections }) {
  return (
    <main>
      <StyledHeading>FlipWise</StyledHeading>
      <CollectionList
        collections={collections}
        emptyListMessage="No Collections available."
      />
    </main>
  );
}
