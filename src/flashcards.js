import "./flashcards.css";

const flashCards = [
  { id: 1, question: "What language is React based on?", answer: "JavaScript" },
  {
    id: 2,
    question: "What are the building blocks of React app?",
    answer: "Components",
  },
  {
    id: 3,
    question:
      "What is the name of the syntax we use to describe a UI in React?",
    answer: "N/A",
  },
  {
    id: 4,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  { id: 5, question: "How to give components memory?", answer: "Using State" },
  {
    id: 6,
    question:
      "What do we call an input element that is completely synchronized with state?",
    answer: "Element Controlling",
  },
];

export default function App() {
  return (
    <div className="container">
      <Cards />
    </div>
  );
}

function Cards() {
  return flashCards.map((card) => (
    <FlashCard id={card.id} question={card.question} answer={card.answer} />
  ));
}

function FlashCard({ id, question, answer }) {
  return <div className="item">{`${id}: ${question}, ${answer}`}</div>;
}
