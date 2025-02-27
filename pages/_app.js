import GlobalStyle from "../styles";
import { flashcards as initialFlashCards } from "@/lib/data";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import { collections as initialCollections } from "@/lib/data";
import { uid } from "uid";
import Navigation from "@/components/Navigation";

export default function App({ Component, pageProps }) {
  const [flashCards, setFlashCards] = useLocalStorageState("flashCards", {
    defaultValue: initialFlashCards,
  });

  const [collections, setCollections] = useLocalStorageState("collections", {
    defaultValue: initialCollections,
  });

  const router = useRouter();

  // get flashCard counts in collections
  const collectionsWithCounts = collections.map((collection) => {
    const flashCardsInCollection = flashCards.filter(
      (card) => card.collectionId === collection.id
    );
    const correctCount = flashCardsInCollection.filter(
      (card) => card.isLiked
    ).length;

    return {
      ...collection,
      totalCards: flashCardsInCollection.length,
      correctCards: correctCount,
    };
  });

  // function for submitting or editing a flashcard
  function handleSubmit(data, flashCardToUpdate_id) {
    const newFlashCard = {
      ...data,
      id: uid(),
      isLiked: false,
    };

    // handle submit behaviour by mode (add or edit)
    if (!flashCardToUpdate_id) {
      setFlashCards([newFlashCard, ...flashCards]);
    } else {
      setFlashCards(
        flashCards.map((flashCard) =>
          flashCard.id === flashCardToUpdate_id
            ? {
                id: flashCardToUpdate_id,
                ...data,
                isLiked: flashCard.isLiked,
              }
            : flashCard
        )
      );
      router.back();
    }
  }

  // submit function to add a new collection
  function onSubmitCollection(data, collectionToUpdate_id) {
    const newCollection = {
      ...data,
      id: uid(),
    };

    if (!collectionToUpdate_id) {
      setCollections([newCollection, ...collections]);
    } else {
      setCollections(
        collections.map((collection) =>
          collection.id === collectionToUpdate_id
            ? {
                id: collectionToUpdate_id,
                ...data,
              }
            : collection
        )
      );
      router.back();
    }
  }

  // delete function for a single card
  function deleteCard(id) {
    const updatedFlashCards = flashCards.filter(
      (flashcard) => flashcard.id !== id
    );
    setFlashCards(updatedFlashCards);
  }

  function deleteCollection(id) {
    const updatedCollections = collections.filter(
      (collection) => collection.id !== id
    );
    setCollections(updatedCollections);
  }

  // toggle isLiked key for cards
  function onLiked(id) {
    const updatedFlashCards = flashCards.map((flashCard) =>
      flashCard.id === id
        ? { ...flashCard, isLiked: !flashCard.isLiked }
        : flashCard
    );

    setFlashCards(updatedFlashCards);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        onSubmit={handleSubmit}
        onSubmitCollection={onSubmitCollection}
        flashCards={flashCards}
        deleteCard={deleteCard}
        deleteCollection={deleteCollection}
        onLiked={onLiked}
        collections={collectionsWithCounts}
      />
      <Navigation />
    </>
  );
}
