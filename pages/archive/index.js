import FlashCardList from "@/components/FlashCardList";
import { useState } from "react";

export default function ArchivePage({
  onMarkCorrect,
  deleteCard,
  flashCards,
  collections,
  noCards,
}) {
  const [selectedCollection, setSelectedCollection] = useState("");

  const filteredFlashCards = flashCards.filter((card) =>
    selectedCollection
      ? card.collectionId === selectedCollection
      : card.isCorrect
  );
  return (
    <main>
      <h1>Archive</h1>
      <select onChange={(event) => setSelectedCollection(event.target.value)}>
        <option value="">All collections</option>
        {collections.map((collection) => (
          <option key={collection.id} value={collection.id}>
            {collection.title}
          </option>
        ))}
      </select>
      <FlashCardList
        onMarkCorrect={onMarkCorrect}
        deleteCard={deleteCard}
        flashCards={filteredFlashCards}
        collections={collections}
        emptyListMessage={
          noCards
            ? "No FlipCards left.\nClick on 'New Card' below to add new FlipCards."
            : "No FlipCards archived."
        }
      />
    </main>
  );
}
