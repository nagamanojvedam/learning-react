import { useState } from "react";
import "./flashcards.css";

const flashCards = [
  {
    id: 1,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 2,
    question: "What are the building blocks of React app?",
    answer: "Components",
  },
  {
    id: 3,
    question:
      "What is the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 4,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 5,
    question: "How to give components memory?",
    answer: "Using State",
  },
  {
    id: 6,
    question:
      "What do we call an input element that is completely synchronized with state?",
    answer: "Element Controlling",
  },
];

export default function App() {
  return (
    <div className="app">
      <Cards />
    </div>
  );
}

function Cards() {
  const [selectedID, setSelectedID] = useState(null);

  function handleClick(id) {
    setSelectedID(selectedID !== id ? id : null);
  }

  return flashCards.map((card) => {
    const isOpen = selectedID === card.id;

    return (
      <div
        className={isOpen ? `item active` : "item"}
        key={card.id}
        onClick={() => handleClick(card.id)}
      >
        {isOpen ? `${card.answer}` : `${card.id}) ${card.question}`}
      </div>
    );
  });
}
