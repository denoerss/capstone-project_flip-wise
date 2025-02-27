import { useRouter } from "next/router";
import FlashCardList from "@/components/FlashCardList";
import Dropdown from "@/components/Dropdown";
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
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  text-decoration: none;
  color: #ffffff;
  background-color: #000000;
  padding: 0.9rem;
  margin: 45px 35px 0 0;
  min-width: 100px;
  border-style: none;
  border-radius: 30px;
  font-size: 1.3rem;
  &:hover {
    cursor: pointer;
  }
`;

export default function Collection({
  onLiked,
  deleteCard,
  flashCards,
  collections,
}) {
  // Router
  const router = useRouter();
  const { id } = router.query;

  // Background Color
  const currentCollection = collections.find(
    (collection) => collection.id === id
  );
  if (!currentCollection) {
    return null;
  }
  const backgroundColor = currentCollection.color;

  // FlashCards
  const activeFlashCards = flashCards.filter((card) => !card.isLiked);
  const filteredFlashCards = activeFlashCards.filter(
    (card) => card.collectionId === currentCollection.id
  );

  return (
    <StyledMain color={backgroundColor}>
      <StyledHeader>
        <Dropdown
          urlBase="collection"
          collections={collections}
          currentCollection={currentCollection}
        />
        <StyledButton
          onClick={() => router.push(`/collection/${id}/play?card=0`)}
        >
          ⏵ play
        </StyledButton>
      </StyledHeader>

      <FlashCardList
        onLiked={onLiked}
        deleteCard={deleteCard}
        flashCards={filteredFlashCards}
        collections={collections}
        currentCollection={currentCollection}
      />
    </StyledMain>
  );
}
