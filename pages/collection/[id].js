import { useRouter } from "next/router";
import FlashCardList from "@/components/FlashCardList";
import { motion } from "motion/react";
import styled from "styled-components";

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

  const filteredFlashCards = flashCards.filter(
    (card) => card.collectionId === currentCollection.id
  );

  const StyledMain = styled(motion.main);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <FlashCardList
        onMarkCorrect={onMarkCorrect}
        deleteCard={deleteCard}
        flashCards={filteredFlashCards}
        collections={collections}
        urlBase={"collection"}
        currentCollection={currentCollection}
      />
    </motion.main>
  );
}
