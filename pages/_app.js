import GlobalStyle from "../styles";
import { flashcards as initialFlashCards } from "@/lib/data";
import Navigation from "@/components/Navigation";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import { collections } from "@/lib/data";

export default function App({ Component, pageProps }) {
  const [flashCards, setFlashCards] = useLocalStorageState("flashCards", {
    defaultValue: initialFlashCards,
  });
  const router = useRouter();

  const activeFlashCards = flashCards.filter((card) => !card.isCorrect);
  const archivedFlashCards = flashCards.filter((card) => card.isCorrect);

  const flashCardsToShow =
    router.pathname === "/archive" ? archivedFlashCards : activeFlashCards;

  function onMarkCorrect(id) {
    const updatedFlashCards = flashCards.map((flashcard) =>
      flashcard.id === id
        ? { ...flashcard, isCorrect: !flashcard.isCorrect }
        : flashcard
    );

    setFlashCards(updatedFlashCards);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        onMarkCorrect={onMarkCorrect}
        flashCards={flashCardsToShow}
        collections={collections}
      />
      <Navigation />
    </>
  );
}
