import { useRouter } from "next/router";
import FlashCardList from "@/components/FlashCardList";
import Dropdown from "@/components/Dropdown";
import Link from "next/link";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.color || "#ffffff"};
  margin: 0;
  min-height: 100vh;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  font-size: 1.25rem;
  text-decoration: none;
  text-align: center;
  align-items: center;
  max-width: fit-content;
  color: #000000;
  background-color: #cacaca;
  padding: 1rem;
  border-style: none;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export default function Collection({
  onMarkCorrect,
  deleteCard,
  flashCards,
  collections,
}) {
  const router = useRouter();
  const { id } = router.query;

  const currentCollection = collections.find(
    (collection) => collection.id === id
  );

  if (!currentCollection) {
    return null;
  }

  const activeFlashCards = flashCards.filter((card) => !card.isCorrect);

  const filteredFlashCards = activeFlashCards.filter(
    (card) => card.collectionId === currentCollection.id
  );

  const backgroundColor = currentCollection.color;

  return (
    <StyledMain color={backgroundColor}>
      <StyledHeader>
        <Dropdown
          urlBase="collection"
          collections={collections}
          currentCollection={currentCollection}
        />
        <StyledLink href={`/collection/${id}/play?card=0`}>Play</StyledLink>
      </StyledHeader>
      <FlashCardList
        onMarkCorrect={onMarkCorrect}
        deleteCard={deleteCard}
        flashCards={filteredFlashCards}
        collections={collections}
        currentCollection={currentCollection}
      />
    </StyledMain>
  );
}
