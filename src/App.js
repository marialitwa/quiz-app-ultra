import "./App.css";
import Header from "./Header.js";
import Card from "./Card.js";
import Navbar from "./Navbar.js";
import { useState } from "react";

const cards = [
  {
    id: 0,
    question: "Question1",
    answer:
      "Laborum incididunt eu quis consectetur ut proident sint proident. Proident exercitation elit reprehenderit proident occaecat Lorem.",
    tags: ["#HTML", "#CSS"],
  },
  {
    id: 1,
    question: "Question2",
    answer:
      "Aliquip Lorem ipsum pariatur reprehenderit nisi nulla eiusmod sint.",
    tags: ["#HTML", "#CSS", "#JavaScript"],
  },
  {
    id: 2,
    question: "Question3",
    answer:
      "Magna minim laborum enim dolor ea officia adipisicing do exercitation. Qui amet esse nisi qui nisi cupidatat elit occaecat eu et.",
    tags: ["#HTML", "#JavaScript"],
  },
  {
    id: 3,
    question: "Question4",
    answer:
      "Ipsum aute mollit id commodo ad cupidatat culpa incididunt. Tempor aliqua id ex sit Lorem est quis in.",
    tags: ["#HTML", "#CSS", "#JavaScript", "React"],
  },
  {
    id: 4,
    question: "Question5",
    answer:
      "Velit aliquip proident in elit nulla esse id non occaecat proident do sunt. Incididunt eu consequat ipsum qui deserunt.",
    tags: ["#CSS", "#JavaScript"],
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
