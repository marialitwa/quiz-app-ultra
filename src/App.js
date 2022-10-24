import "./App.css";
import Header from "./Header.js";
import Card from "./Card.js";
import Navbar from "./Navbar.js";
import { useState } from "react";

// QUIZ QUESTIONS: https://expertphotography.com/expert-photography-quiz/
const cards = [
  {
    id: 0,
    question: "What are the elements of the exposure triangle?",
    answer: "Aperture – ISO – Shutter Speed",
    tags: ["#photo technique", "#exposure"],
  },
  {
    id: 1,
    question: "When was the first colour photograph taken?",
    answer: "1861",
    tags: ["#photo history", "#color photography"],
  },
  {
    id: 2,
    question: "Who photographed the famous picture ‘The Afghan girl’?",
    answer: "Steve McCurry",
    tags: ["#photographers", "#famous photographs", "#portraiture"],
  },
  {
    id: 3,
    question: "What Is Bokeh?",
    answer:
      "The aesthetic quality of the blur produced in the out-of-focus parts of an image.",
    tags: ["#photo technique"],
  },
  {
    id: 4,
    question:
      "What camera brand did NASA use (and leave behind) to photograph the first steps on the moon?",
    answer: "Hasselblad",
    tags: ["#photo history", "#camera brands", "#nasa"],
  },

  {
    id: 5,
    question: "What does photography mean, and in what language?",
    answer: "#Drawing with light in Greek",
    tags: ["#photography", "#miscellaneous"],
  },
];

function App() {
  const [currentPage, setPage] = useState("home");

  return (
    <div>
      <Header />

      <main className="app__main">
        <ul className="card-list">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </ul>
      </main>

      <Navbar setPage={setPage} currentPage={currentPage} />
    </div>
  );
}

export default App;
