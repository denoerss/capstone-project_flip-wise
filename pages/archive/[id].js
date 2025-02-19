import { useRouter } from "next/router";
import FlashCardList from "@/components/FlashCardList";
import styled from "styled-components";

const StyledHeading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
`;

export default function ArchiveCollection({
  onMarkCorrect,
  deleteCard,
  flashCards,
  collections,
  noCards,
}) {
  const router = useRouter();
  const { id } = router.query;

  const currentArchivedCollection = collections.find(
    (collection) => collection.id === id
  );

  console.log("currentArchivedCollection: ", currentArchivedCollection.id);

  return (
    <main>
      <StyledHeading>FlipWise</StyledHeading>
      <FlashCardList
        currentArchivedCollection={currentArchivedCollection}
        onMarkCorrect={onMarkCorrect}
        deleteCard={deleteCard}
        flashCards={flashCards}
        collections={collections}
        emptyListMessage={
          noCards
            ? "No FlipCards left.\nClick on 'New Card' below to add new FlipCards."
            : "All FlipCards are marked as correct."
        }
      />
    </main>
  );
}
