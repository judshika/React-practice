import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <img 
  src="1725501186362.jpg" 
  alt="Anad Judshika"
  style={{ 
    width: "150px", 
    height: "190px", 
    borderRadius: "70%", 
    border: "3px solid #555", 
    objectFit: "cover" 
  }} 
/>
      </div>
      <div className="hero-right">
        <h2>Hey, I'm <span className="highlight">Anad Judshika John Roos Well</span></h2>
        <h3>Front-End Developer</h3>
        <p>
          Passionate Front-End Developer experienced in building responsive websites with HTML, CSS, JavaScript, React, and Bootstrap.<br />
          Eager to grow and contribute to real-world projects.
        </p>
        <div className="social-icons">
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">GitHub</a> | 
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">LinkedIn</a> | 
          <a href="mailto:judsijudsika@gmail.com">Email</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
