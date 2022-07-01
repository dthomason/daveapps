import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { useState } from "react";
import { useUserContext } from '../../hooks/useContext';

export function Header() {
  const [isActive, setActive] = useState(false);

  // function toggleTheme() {
  //   let html = document.getElementsByTagName("html")[0];
  //   html.classList.toggle("light");
  // }



  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>DaveApps</span>
        </HashLink>

        {/* <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        /> */}
        {/* <label htmlFor="switch">Toggle</label> */}

        <nav className={isActive ? "active" : ""}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About
          </NavHashLink>
          {/* <NavHashLink smooth to="#projects" onClick={closeMenu}>
            Projects
          </NavHashLink> */}
          <NavHashLink smooth to="#contact" className="button" onClick={closeMenu}>
            Contact
          </NavHashLink>
          {/* <a href={Resume} download className="button">
            Resume
          </a> */}
        </nav>

        <div
          aria-expanded={isActive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isActive ? "Date menu" : "Open menu"}
          className={isActive ? "menu active" : "menu"}
          onClick={() => {
            setActive(!isActive);
          }}
        ></div>
      </Router>
    </Container>
  );
}
