import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>J. Anad Judshika John Roos Well</h1>
        <p className="role">Front-End Developer</p>
        <p className="contact">
          Kilinochchi, Santhapuram, Ambalnagar, 22th Road<br />
          <a href="mailto:judsijudsika@gmail.com">judsijudsika@gmail.com</a> | +94 076 274 7829
        </p>
      </header>

      <section>
        <h2>Summary</h2>
        <p>
          Passionate Front-End Developer with hands-on experience in building responsive websites using HTML, CSS,
          JavaScript, React, and Bootstrap. Eager to grow in a team environment and contribute to real-world web
          development projects.
        </p>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li>Languages: JavaScript, HTML, CSS, Bootstrap</li>
          <li>Frameworks: React</li>
          <li>Tools: GitHub, VS Code, Canva, CapCut</li>
          <li>Others: Microsoft Office, Photoshop, MySQL</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>Built a calculator web app using HTML, CSS, and JavaScript with input validation</li>
          <li>Practiced DOM manipulation and real-time event handling</li>
        </ul>
      </section>

      <section>
        <h2>Soft Skills</h2>
        <p>
          Teamwork, Time Management, Problem-Solving, Communication, Video & Photo Editing, Strong Work Ethic
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <p>IAT Technologies, DON BOSCO – Basic Computer Skills, Full Stack Development</p>
      </section>

     

      <footer className="footer">
        <p>
          I hereby declare that all the information provided above is true and correct to the best of my knowledge.
        </p>
        <p>Date: 03.07.2025</p>
        <p className="signature">Signature: J. Anad Judshika</p>
      </footer>
    </div>
  );
}

export default App;
