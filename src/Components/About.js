import React from "react";
import { useState } from "react";

const About = () => {
  const [isReveal, setIsReveal] = useState(false);
  return (
    <div id="about">
      <img src="images/knucklehead.jpg" alt="knucklehead" />
      <div className="text">
        <p className={isReveal ? "infoTextReveal" : "infoText"} id="abouttext1">
          Our journey began with the Harley Davidson Knucklehead, created all
          the way back in 1935. The favourite bike of our founders who started
          this company back in 1952. From humble beginnings as a simple
          workshop, we are now the premiere specialists of all things retro on
          two wheels. We have since expanded our operations to provide for a
          wider array of motorcycles.
        </p>
        <p
          className={isReveal ? "infoText" : "infoTextReveal"}
          onClick={() => setIsReveal(false)}
          id="abouttext2"
        >
          This website has been made by Alex Hmar for AAFT.This website is
          mobile responsive and also supports ultrawide displays.
        </p>
      </div>
      <img
        src="images/cruiser.svg"
        alt="cruiser"
        onClick={() => setIsReveal(!isReveal)}
      />
    </div>
  );
};

export default About;
