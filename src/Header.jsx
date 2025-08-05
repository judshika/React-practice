import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo"><u>ANAD JUDSHIKA JOHN ROOS WELL</u></h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#summary">Summary</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
