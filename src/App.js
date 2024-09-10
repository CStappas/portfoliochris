import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import StarryBackground from "./components/StarryBackground";

function App() {
  return (
    <div className="App">
      <StarryBackground/>
      <Navbar />
      <Section />
    </div>
  );
}

export default App;
