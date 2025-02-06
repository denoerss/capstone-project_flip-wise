import GlobalStyle from "../styles";
import { flashcards as initialFlashCards } from "@/lib/data";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [flashCards, setFlashCards] = useState(initialFlashCards);
  const router = useRouter();

  const activeFlashCards = flashCards.filter((card) => !card.isCorrect);
  const archivedFlashCards = flashCards.filter((card) => card.isCorrect);

  function onMarkCorrect(id) {
    const updatedFlashCards = flashCards.map((flashcard) =>
      flashcard.id === id
        ? { ...flashcard, isCorrect: !flashcard.isCorrect }
        : flashcard
    );
    setFlashCards(updatedFlashCards);
  }
  const flashCardsToShow =
    router.pathname === "/archive" ? archivedFlashCards : activeFlashCards;

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        onMarkCorrect={onMarkCorrect}
        flashCards={flashCardsToShow}
      />
      <Navigation />
    </>
  );
}
