import React from 'react'
import './About.css'
import aboutImg from '/Users/wolfe/REACT_Portfolio/REACT-Portfolio/portfolio/src/img/IMG_0455 2.jpeg'
function About() {
  return (
    <div className="about component__space">
        <div className="container">
            <div className="row">
                < div className="col__2">
                    <img src={aboutImg} alt="" className="about__img" />
                </div>
                <div className="col__2">
                    <h1 className="about__heading">
                        About Me
                    </h1>
                    <div className="about__meta"> 
                        <p className="about__text p__color">
                        I am a polyglot software developer who is passionate about all things tech & providing people of color with more opportunities to learn about software engineering. My experience as a military firefighter & 911 dispatcher has given me many tools, skills and temperament to be a valuable asset to any team. In the future I want to take my knowledge and past experiences to build a platform that’ll allow me to reach people of color and teach them about the world of tech.
                        </p>
                        < div className="about__button d__flex align__items__center">
                          <a href="#"><button className="about btn pointer">Download Resume</button></a>
                          <a href="#"><button className="about btn pointer">Download CV</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About
