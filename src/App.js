import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Advantage from "./components/Advantage";
import Projects from "./components/Projects";
import Partners from "./components/Partners";
import Modal from "./components/ModalWindow";
import BurgerMenu from "./components/BurgerMenu";
import "./App.css";
function App() {
  return (
    <div>
      <Home />
      <Modal />
      <AboutUs />
      <Advantage />
      <Projects />
      <Partners />
    </div>
  );
}

export default App;
