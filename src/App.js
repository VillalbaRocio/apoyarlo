import "./App.css";
import Home from "./pages/home/Home";
import PersonCard from "./components/PersonCard";
import { estudiantes } from "./utils/dataPerson";

function App() {
  return (
    <div className="App">
      <Home class="home">
        {estudiantes.map((unEstudiantes) => (
          <PersonCard person={unEstudiantes} />
        ))}
        {/* <PersonCard
          firstName="Doe"
          lastName="Jane"
          age={45}
          hairColor="Black"
        />
        <PersonCard
          firstName="Smith"
          lastName="John"
          age={88}
          hairColor="Brown"
        />
        <PersonCard 
        firstName="Fillmore"
        lastName="Millard"
        age={50}
        hairColor="Brown"
        />
        <PersonCard
        firstName="Smith"
        lastName="Maria"
        age={62}
        hairColor="Brown"
        /> */}
      </Home>
    </div>
  );
}

export default App;
