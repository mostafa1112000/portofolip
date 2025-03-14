import React from "react";
import "./projects.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio Item 1",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    image: IMG2,
    title: "Portfolio Item 2",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    image: IMG3,
    title: "Portfolio Item 3",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    image: IMG4,
    title: "Portfolio Item 4",
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    image: IMG5,
    title: "Portfolio Item 5",
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    image: IMG6,
    title: "Portfolio Item 6",
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="top_section">
        <h5> My Recent Work</h5>
        <h2>Protofolio </h2>
      </div>
      <div className="container projects_container">
        {portfolioData.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item_image">
              <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item_btns">
              <a href={github} className="btn">
                Github
              </a>
              <a href={demo} className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
