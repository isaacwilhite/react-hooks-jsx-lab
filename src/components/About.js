import React from "react";
import { image } from "../data/data";

function About() {
  return <div id='about'>
    <h2>About Me</h2>
    <p>I love to surf, skate, listen to music, play games, and have fun with family and friends</p>
    <img src={image} alt='I made this'/>
  </div>;
}

export default About;
