import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sowjanya Bojja </span>
            
            <br />
            I am AI enthusiastic.
            <br />
            Master of science in Data Science  
            <br />
            Please feel free to explore my portfolio RAG Personal BOT https://sowji-rag-ryghknvuvr332lqhy56tqn.streamlit.app/ in the navigation bar for more details about me.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess 
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Puzzles
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Feel free to reach me on simplysowj@gmail.com!"{" "}
          </p>
          <footer className="blockquote-footer">Sowjanya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
