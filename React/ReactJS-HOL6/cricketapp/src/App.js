import { ListofPlayers } from "./Components/ListofPlayers";
import { Scorebelow70 } from "./Components/Scorebelow70";
import { OddPlayers } from "./Components/OddPlayers";
import { EvenPlayers } from "./Components/EvenPlayers";
import {
  IndianPlayers,
  IndianTeam
} from "./Components/IndianPlayers";
import { ListofIndianPlayers } from "./Components/ListofIndianPlayers";

const players = [
  { name: "Jack", score: 50 },
  { name: "Michael", score: 70 },
  { name: "John", score: 40 },
  { name: "Ann", score: 61 },
  { name: "Elisabeth", score: 61 },
  { name: "Sachin", score: 95 },
  { name: "David", score: 100 },
  { name: "Jadeja", score: 64 },
  { name: "Raina", score: 75 },
  { name: "Rohit", score: 80 },
  { name: "Virat", score: 90 }
];

var flag = true;

function App() {

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />

        <hr />

        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Odd Players</h1>
        <OddPlayers>{IndianTeam}</OddPlayers>

        <hr />

        <h1>Even Players</h1>
        <EvenPlayers>{IndianTeam}</EvenPlayers>

        <hr />

        <h1>List of Indian Players Merged:</h1>
        <ListofIndianPlayers IndianPlayers={IndianPlayers} />
      </div>
    );
  }
}

export default App;