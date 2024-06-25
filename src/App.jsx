import Card from "./components/Card";
import Pokedata from "./components/Pokedata";
import './App.css'

function App() {
  return (
    <div>
      <h1 className="title">
        PokeBase
      </h1>
      <Card />
      <Pokedata />
    </div>
  );
}

export default App;
