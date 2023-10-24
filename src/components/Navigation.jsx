// import DarkMode from "./DarkMode";
import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            à propos
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/calendar"}
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            calendrier
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            contact
          </NavLink>
        </li>
      </ul>
      {/* <DarkMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> */}
    </nav>
  );
}
export default Navigation;
