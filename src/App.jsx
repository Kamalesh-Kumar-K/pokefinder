import Card from "./components/Card";
import Pokedata from "./components/Pokedata";


function App() {
  return (
    <div>
      <h1
        style={{
          color: "white",
          margin: "12px",
          display: "flex",
          background: "red",
          width: "15%",
          textAlign: "center",
          borderRadius: "20px",
          fontSize: "35px",
          justifyContent: "center",
        }}
      >
        PokeFinder
      </h1>
      <Card />
      <Pokedata />
    </div>
  );
}

export default App;
