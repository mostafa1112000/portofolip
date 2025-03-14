import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import ImgeMe from "../../assets/me-about .jpg";
function About() {
  return (
    <section className="about" id="about">
      <div className="top_section">
        <h5>Get To Know</h5>
        <h2> About Me</h2>
      </div>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ImgeMe} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className="about_icon" />

              <h5>Experience </h5>
              <small>+ years Working</small>
            </div>

            <div className="about_card">
              <FiUsers className="about_icon" />

              <h5>Clints </h5>
              <small>+ worldwide</small>
            </div>

            <div className="about_card">
              <VscFolderLibrary className="about_icon" />

              <h5>Projects</h5>
              <small>4+ completed</small>
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            velit, quas eligendi minima nihil amet sit doloremque, enim ea,
            cumque atque error! Ducimus pariatur eum voluptate consequatur
            doloribus eius ipsam!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
