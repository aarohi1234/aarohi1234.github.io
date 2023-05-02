import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";

import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Statistics from "./Components/Statistics";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Statistics />
      <Contact />
    </div>
  );
}

export default App;
