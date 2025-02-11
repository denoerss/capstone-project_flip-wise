import GlobalStyle from "../styles";
import { flashcards as initialFlashCards } from "@/lib/data";
import Navigation from "@/components/Navigation";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [flashCards, setFlashCards] = useLocalStorageState("flashCards", {
    defaultValue: initialFlashCards,
  });
  const router = useRouter();

  const activeFlashCards = flashCards.filter((card) => !card.isCorrect);
  const archivedFlashCards = flashCards.filter((card) => card.isCorrect);

  const flashCardsToShow =
    router.pathname === "/archive" ? archivedFlashCards : activeFlashCards;

  const noCards = flashCards.length === 0;

  function onMarkCorrect(id) {
    const updatedFlashCards = flashCards.map((flashcard) =>
      flashcard.id === id
        ? { ...flashcard, isCorrect: !flashcard.isCorrect }
        : flashcard
    );

    setFlashCards(updatedFlashCards);
  }


  const addFlashCard = (newFlashCard) =>
    setFlashCards([newFlashCard, ...flashCards]);

  function deleteCard(id) {
    const updatedFlashCards = flashCards.filter(
      (flashcard) => flashcard.id !== id
    );
    setFlashCards(updatedFlashCards);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        onMarkCorrect={onMarkCorrect}
        deleteCard={deleteCard}
        flashCards={flashCardsToShow}
        onAddFlashCard={addFlashCard}
        collections={collections}
        noCards={noCards}
      />
      <Navigation />
    </>
  );
}
