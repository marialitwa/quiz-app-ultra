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
    tag_01: "#photo technique",
    tag_02: "#exposure",
  },
  {
    id: 1,
    question: "When was the first colour photograph taken?",
    answer: "1861",
    tag_01: "#photo history",
    tag_02: "#color photography",
  },
  {
    id: 2,
    question: "Who photographed the famous picture ‘The Afghan girl’?",
    answer: "Steve McCurry",
    tag_01: "#photographers",
    tag_02: "#famous photographs",
    tag_03: "#portraiture",
  },
  {
    id: 3,
    question: "What Is Bokeh?",
    answer:
      "The aesthetic quality of the blur produced in the out-of-focus parts of an image.",
    tag_01: "#photo technique",
  },
  {
    id: 4,
    question:
      "What camera brand did NASA use (and leave behind) to photograph the first steps on the moon?",
    answer: "Hasselblad",
    tag_01: "#photo history",
    tag_02: "#camera brands",
    tag_03: "#nasa",
  },

  {
    id: 5,
    question: "What does photography mean, and in what language?",
    answer: "#Drawing with light in Greek",
    tag_01: "#photography",
    tag_02: "#miscellaneous",
  },
];

function App() {
  const [state, setState] = useState("home");

  return (
    <div>
      <Header />
      {state}

      <main className="app__main">
        <ul className="card-list">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </ul>
      </main>

      {/*
        CARDS OHNE ARRAY UND OHNE MAPPING:
        <Card
          question="In the Kingdom Heart series who provides the english voice for Master
          Eraqus?"
          answer="Mark Hamill"
          tag1="#kingdomheart"
          tag2="#mastereraqus"
          tag3="#english voices"
        />
        <Card
          question="Loprem ipsum?"
          tag1="#bbbbb"
          tag2="#ccccc"
          tag3="#ddddd"
        />
        <Card
          question="Loprem ipsum skjvbksj?"
          tag1="#eeee"
          tag2="#fff"
          tag3="#gggg"
        />       
      }
      </ul>
    */}

      <Navbar setPage={setState} />
    </div>
  );
}

export default App;
