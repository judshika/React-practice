import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <h1>
          <u>Anad Judshika John Roos Well<br></br>
            Full Stack Developer
          </u>
        </h1>
        <ul>
          <li>
            <a href="#TECHNICAL">TECHNICAL |</a>
          </li>
          <li>
            <a href="#SUMMARY">SUMMARY |</a>
          </li>
          <li>
            <a href="#PROJECT&SKILLS">PROJECT&SKILLS |</a>
          </li>
          <li>
            <a href="#EDUCATION">EDUCATION |</a>
          </li>
          <li>
            <a href="#LANGUAGES">LANGUAGES |</a>
          </li>
          <li>
            <a href="#CONTACT">CONTACT |</a>
          </li>
        </ul>
      </nav>
      <br></br>
      <br></br>
      <br></br>
      <div id="TECHNICAL"className="section">
        <h1>
          <u>TECHNICAL</u>
        </h1>
        <ul>
          <b>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>React</li>
            <li>Microsoft Office</li>
            <li>Photoshop</li>
            <li>My SQL</li>
          </b>
        </ul>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div id="SUMMARY" className="section">
        <h1>
          <u>SUMMARY</u>
        </h1>
        <p>
          <b>
            Passionate Front-End Developer with hands-on experience in building
            responsive websites using HTML, CSS, JavaScript, React and
            Bootstrap. Eager to grow in a team environment and contribute to
            real world web development projects.
          </b>
        </p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div id="PROJECT&SKILLS"className="section">
        <h1>
          <u>PROJECTS & SKILLS</u>
        </h1>
        <div className="box">
          <h2>
            <u>Calculator App</u>
          </h2>
          <p>
            <b>
              Built a fully functional calculator web application using HTML,
              CSS and JavaScript.
            </b>
          </p>
        </div>
        <div className="box">
          <h2>
            <u>Arithmetic Operations</u>
          </h2>
          <p>
            <b>
              Implemented arithmetic operations (Add, Subtract, Multiply,
              Divide) with input validation.
            </b>
          </p>
        </div>

        <h2>
          <u>SKILLS</u>
        </h2>
        <ul>
          <li>
            <b>Languages: JavaScript, HTML, CSS, Bootstrap.</b>
          </li>
          <li>
            <b>Tools: GitHub, Visual Studio Code, Canva, CapCut.</b>
          </li>
          <li>
            <b>
              Soft Skills: Team Work, Time Management, Problem-Solving,
              Communication, Video and Photo Editing, Strong Work Ethics.
            </b>
          </li>
        </ul>
      </div>

      <br></br>
      <div id="EDUCATION" className="section">
        <h1>
          <u>EDUCATION</u>
        </h1>
        <h3>IAT Technologies in DON BOSCO</h3>
        <ul>
          <li>
            <b>Basic Computer Skills</b>
          </li>
          <li>
            <b>Full Stack Development</b>
          </li>
        </ul>
      </div>
      <br></br>

      <div id="LANGUAGES" className="section">
        <h1>
          <u>LANGUAGES</u>
        </h1>
        <ul>
          <li>
            <b>Native Tamil</b>
          </li>
          <li>
            <b>Advanced English</b>
          </li>
        </ul>
      </div>

      <div id="CONTACT" className="CONTACT">
        <h2>
          <u>CONTACT</u>
        </h2>
        <p>
          <b>
            Email:{" "}
            <a href="mailto:judsijudsika@gmail.com">judsijudsika@gmail.com</a>
          </b>
        </p>
        <p>
          <b>Phone: +94 0762747829</b>
        </p>
        <p>
          <b>Address: Kilinochchi, Santhapuram, Ambaalnagar 22th road</b>
        </p>
      </div>
    </div>
  );
}

export default App;
