import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id= "about">
    <h2>About Me</h2>
    <p>I am a devoted web developer who is passionate in developing web products that are user friendly and alllows user interactivity</p>
    <img src={image} alt ="I made this"/>
  </div>
  )
}

export default About;
