import React, { Component } from "react";
import { faEnvelope, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Day6.css";

export default class Day6 extends Component {
  render() {
    return (
      <section className="userProfile">
        <div className="assignment">
          <h2 className="dayNumber">Day 6</h2>
          <h3 className="dayDescription">User Profile</h3>
        </div>
        <div className="profile">
          <div className="profilePic">
            <img src="https://i.imgur.com/IfBKMtP.jpg" alt="profile pictures" />
          </div>
          <div className="profileInfo">
            <h1>Cameron Corrado</h1>
            <p>Full-Stack Web Developer &amp; Video Editor</p>
            <p>camcorrado@gmail.com</p>
            <div className="contact">
              <ul className="navLinks">
                <li className="gmail">
                  <a href="mailto:camcorrado@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} className="faIcon" />
                  </a>
                </li>
                <li className="github">
                  <a
                    href="https://github.com/camcorrado"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="faIcon" />
                  </a>
                </li>
                <li className="linkedin">
                  <a
                    href="https://www.linkedin.com/in/camcorrado/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="faIcon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://camcorradoportfolio.s3.amazonaws.com/Cameron+Corrado's+Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      className="faIcon"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
