import { useRouter } from "next/router";
import FlashCardList from "@/components/FlashCardList";
import Dropdown from "@/components/Dropdown";
import styled from "styled-components";
import Button from "@/components/Button";

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

export default function LikesPage({
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

  // FlashCards for this collection
  const filteredLikedFlashCards = flashCards.filter(
    (card) => card.collectionId === currentCollection.id && card.isLiked
  );

  return (
    <StyledMain color={backgroundColor}>
      <StyledHeader>
        <Dropdown
          urlBase="likes"
          collections={collections}
          currentCollection={currentCollection}
        />

        <Button
          buttonVariant="black"
          onClick={(event) => {
            event.stopPropagation();
            router.push(`/likes/${id}/play`);
          }}
        >
          ⏵ play
        </Button>
      </StyledHeader>

      <FlashCardList
        onLiked={onLiked}
        deleteCard={deleteCard}
        flashCards={filteredLikedFlashCards}
        collections={collections}
        currentCollection={currentCollection}
      />
    </StyledMain>
  );
}
