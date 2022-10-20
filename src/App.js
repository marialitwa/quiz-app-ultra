import "./App.css";
import Header from "./Header.js";
import Card from "./Card.js";
import Navbar from "./Navbar.js";

function App() {
  return (
    <div>
      <Header />
      <ul className="card-list">
        <Card />
        <Card />
        <Card />
      </ul>

      <Navbar />
    </div>
  );
}

export default App;
