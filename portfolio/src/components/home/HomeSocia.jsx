import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

function HomeSocials() {
  return (
    <div className="home_socilals">
      <a
        href="https://www.linkedin.com/in/mostafa-mahmoud-3a5a91223"
        target="_blank"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/mostafa1112000?tab=repositories"
        target="_blank"
      >
        <FaGithub />
      </a>

      <a href="#" target="_blank">
        <FaDribbble />
      </a>
    </div>
  );
}

export default HomeSocials;
