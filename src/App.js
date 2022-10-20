import "./App.css";
import Header from "./Header.js";
import Card from "./Card.js";
import Navbar from "./Navbar.js";

function App() {
  return (
    <div>
      <Header />
      <ul className="card-list">
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
          tag1="#kingdomheart"
          tag2="#mastereraqus"
          tag3="#english voices"
        />
        <Card
          question="Loprem ipsum skjvbksj?"
          tag1="#kingdomheart"
          tag2="#mastereraqus"
          tag3="#english voices"
        />
      </ul>

      <Navbar />
    </div>
  );
}

export default App;
