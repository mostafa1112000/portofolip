import React from "react";
import "./skils.css";
import CSS from "../../assets/css3.svg";
import Figma from "../../assets/figma.svg";
import Javascript from "../../assets/javascript.svg";
import Html from "../../assets/html.png";
import ReactJs from "../../assets/react.svg";
import Bootsrap from "../../assets/bootsrap.png";

const SkillsData = [
  {
    id: 1,
    image: Html,
    title: "Html",
    disc: "User Interface",
  },
  {
    id: 2,
    image: CSS,
    title: "css",
    disc: "User Interface",
  },
  {
    id: 3,
    image: Javascript,
    title: "JavaScript",
    disc: "Interaction",
  },

  {
    id: 4,
    image: Bootsrap,
    title: "Bootsrap",
    disc: "User Interface",
  },
  {
    id: 5,
    image: ReactJs,
    title: "React",
    disc: "Framwork",
  },

  {
    id: 6,
    image: Figma,
    title: "Figma",
    disc: "Design Tool",
  },
];

function Skils() {
  return (
    <section id="skills" className="skills">
      <div className="top_section">
        <h5> what Skills I Have</h5>
        <h2>My Expreience </h2>
      </div>

      <div className="container container_skills">
        {SkillsData.map(({ id, image, title, disc }) => (
          <article key={id} className="card_skill">
            <div className="icon">
              <img src={image} alt="" />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p className="text_light">{disc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skils;
