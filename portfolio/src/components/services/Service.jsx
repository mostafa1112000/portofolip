import React from "react";
import "./service.css";

import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

function Service() {
  return (
    <section id="service">
      <div className="top_section">
        <h5>What I Offer</h5>
        <h2>Service</h2>
      </div>

      <div className="container container_service">
        <article className="card">
          <MdDesignServices className="icon" />
          <h3>Web Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </article>

        <article className="card">
          <IoIosRocket className="icon" />
          <h3>Fast Performance</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </article>

        <article className="card">
          <FaCode className="icon" />
          <h3>Clean Code</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </article>
      </div>
    </section>
  );
}

export default Service;
