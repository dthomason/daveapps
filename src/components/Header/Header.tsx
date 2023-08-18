import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { useState } from "react";

export function Header() {
  const[expand, setExpand] = useState(false);

  function closeMenu() {
    setExpand(false);
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>DaveApps</span>
        </HashLink>

        <nav className={expand ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu} className="button">
            Contact
          </NavHashLink>
        </nav>

        <div
          aria-expanded={expand ? "true" : "false"}
          aria-haspopup="true"
          aria-label={expand ? "Date menu" : "Open menu"}
          className={expand ? "menu active" : "menu"}
          onClick={() => {
            setExpand(!expand);
          }}
        ></div>
      </Router>
    </Container>
  );
}
