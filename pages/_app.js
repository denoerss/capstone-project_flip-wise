import GlobalStyle from "../styles";
import { flashcards as initialFlashCards } from "@/lib/data";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import { initialCollections } from "@/lib/data";
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
      (card) => card.isCorrect
    ).length;

    return {
      ...collection,
      totalCards: flashCardsInCollection.length,
      correctCards: correctCount,
    };
  });

  // function for submitting or editing a flashcard
  function handleSubmit(event, flashCardToUpdate_id) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newFlashCard = {
      ...data,
      id: uid(),
      isCorrect: false,
    };

    // handle submit behaviour by mode (add or edit)
    if (!flashCardToUpdate_id) {
      setFlashCards([newFlashCard, ...flashCards]);
      event.target.reset();
    } else {
      setFlashCards(
        flashCards.map((flashCard) =>
          flashCard.id === flashCardToUpdate_id
            ? {
                id: flashCardToUpdate_id,
                ...data,
                isCorrect: flashCard.isCorrect,
              }
            : flashCard
        )
      );
      router.back();
    }
  }

  // submit function to add a new collection
  function onSubmitCollection(event, collectionToUpdate_id) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newCollection = {
      ...data,
      color: event.target.color.value,
      id: uid(),
    };

    if (!collectionToUpdate_id) {
      setCollections([newCollection, ...collections]);
      event.target.reset();
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

  // toggle isCorrect key for cards
  function onMarkCorrect(id) {
    const updatedFlashCards = flashCards.map((flashCard) =>
      flashCard.id === id
        ? { ...flashCard, isCorrect: !flashCard.isCorrect }
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
        onMarkCorrect={onMarkCorrect}
        collections={collectionsWithCounts}
      />
      <Navigation />
    </>
  );
}
