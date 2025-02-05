import GlobalStyle from "../styles";
import { flashcards as initialFlashCards } from "@/lib/data";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [flashCards, setFlashCards] = useState(initialFlashCards);
  console.log(flashCards);

  function onMarkCorrect(id) {
    const updatedFlashCards = flashCards.map((flashcard) =>
      flashcard.id === id
        ? { ...flashcard, isCorrect: !flashcard.isCorrect }
        : flashcard
    );
    setFlashCards(updatedFlashCards);
    console.log(id);
  }
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} onMarkCorrect={onMarkCorrect} />
    </>
  );
}
