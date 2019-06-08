import React from "react";
import back10 from "../assets/backgrounds/background10.svg";
import back12 from "../assets/backgrounds/background12.svg";
const AboutPage = () => {
  return (
    <div className="container about">
      <h2>How your clothes affect Environment?</h2>
      <div id="about">
        <p>
          The fashion industry is the second largest  polluter in the world.<br/> If
          you had no idea about it, you are certainly not alone.<br/> Aweare App is
          here for you!<br/> This App calculates the environmental impacts of fashion
          industry, provides some tips for more eco-friendly wardrobe and thanks
          to Fabric Glossary it will help you to become more familiar with
          different kinds of fabrics.
        </p>
      </div>
       <img id="bot-left" src={back10} alt="decoration" />
        <img id="bot-right" src={back12} alt="decoration" />
    </div>
  );
};
export default AboutPage;
