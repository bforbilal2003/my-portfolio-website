/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: " Doctor Reservation System 🙂",
    description:
      " Aplatform designed to streamline the process of scheduling appointments with doctors . Aims to provide a convenient and efficient way for patients to book appointments.",
  
  },
  {
    title: "GIKI Assistant",
    description:
      " Asoftware application aiding students of GIK Institute to manage classes, assignments, and schedules.Developed using Python and integrates Google Calendar API and Google Maps API for notifications and navigation",
  
  },
  {
    title: " Computer Organization & Assembly Language, 4096 x 17 Computer System",
    description:
      " Equipped with a 16-bit dual-bus architecture separating data lines from control bits.Instruction composed of addressing mode, op-code, and operand address.",
    
  },
  {
    title: " Hotel Management Reservation System",
    description:
      " Engineered a comprehensive hotel reservation management system utilizing Flask to connect the back-end database with a user-friendly HTML-based web interface.",
    url: "https://github.com/bforbilal2003/dbms-project.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
