import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Projects from "./Projects";

const App = () => {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/> 
    </div>
  );
};

export default App;
