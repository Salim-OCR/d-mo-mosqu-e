import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"; // Importez useState
import { Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Calendar from "./pages/Calendar";
import Navigation from "./components/Navigation";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // État pour le mode sombre

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Fonction de bascule du mode sombre
  };

  return (
    <BrowserRouter>
      <header>
        <Navigation />
      </header>
      {/* Passez l'état isDarkMode et la fonction toggleDarkMode aux composants */}
      <Routes>
        <Route
          path="*"
          element={
            <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
        <Route
          path="/about"
          element={
            <About isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
        <Route
          path="/calendar"
          element={
            <Calendar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
      </Routes>
      <footer>
        <h3>Mosquée Rodez</h3>

        <div className="links-socials">
          <ul>
            <li>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-youtube-play" aria-hidden="true"></i>
            </li>
          </ul>
          <Link to={"https://porfolio-salim.netlify.app/"} target="_blank">
            <p className="credis">Salim - 2023 ©</p>
          </Link>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
