import React from "react";
import Me from "../../assets/me.png";
import "./home.css";
import CV from "../../assets/cv.pdf";
import HomeSocial from "./HomeSocia";
function Home() {
  return (
    <div className="home">
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Mustafa Mahmoud</h1>
        <h4 className="tex-light">Frontend Developer</h4>

        <div className="btns">
          <a href={CV} className="btn" download>
            Download CV
          </a>
          <a href="#" className="btn btn-primary">
            Let's talk
          </a>
        </div>

        <div className="me">
          <img src={Me} alt="" />
        </div>
        <HomeSocial />
        <a href="#about" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </div>
  );
}

export default Home;
