import GlobalStyle from "../styles";
import { flashcards as initialFlashCards } from "@/lib/data";
import Navigation from "@/components/Navigation";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import { collections } from "@/lib/data";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [flashCards, setFlashCards] = useLocalStorageState("flashCards", {
    defaultValue: initialFlashCards,
  });
  const router = useRouter();

  const activeFlashCards = flashCards.filter((card) => !card.isCorrect);
  const archivedFlashCards = flashCards.filter((card) => card.isCorrect);

  // determine which flashcards to show based on the route
  const flashCardsToShow = router.pathname.startsWith("/edit")
    ? flashCards
    : router.pathname === "/archive"
    ? archivedFlashCards
    : activeFlashCards;

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
          flashCard.id ===  flashCardToUpdate_id ? {id:flashCardToUpdate_id,...data} : flashCard
         )
       );
    }
  }

   function deleteCard(id) {
    const updatedFlashCards = flashCards.filter(
      (flashcard) => flashcard.id !== id
    );
    setFlashCards(updatedFlashCards);
  }

  // check if there are any cards
  const noCards = flashCards.length === 0;

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
        flashCards={flashCards}
        deleteCard={deleteCard}
        onMarkCorrect={onMarkCorrect}
        noCards={noCards}
        collections={collections}
      />
      <Navigation />
    </>
  );
}
