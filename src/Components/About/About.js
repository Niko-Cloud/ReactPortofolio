import React from 'react'
import "./About.css";
import ProfilePicture from "../Image/pas foto.png";
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

const About = () => {
  return (
    <div className="about-section" id="about">
        <div className="row">
            <Zoom clear>
                <div className="col-xl-5 col-lg-5 col-md-10 col-sm-10">
                    <div className="about-image">
                        <img src={ProfilePicture} alt="Profile"/>
                    </div>
                </div>
            </Zoom>
            <Bounce right>
                <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12">
                    <div className="about-text">
                        <div className="about-header">
                            <h5>About Me</h5>
                            <span className="line"></span>
                        </div>
                        <div className="about-detail">
                            <p>
                            Hi, My name Indra Niko Saputra. Im currently studying in Diponegoro University majoring in Informatic and now im at 2nd year (5th Semester).
                                I have interest in web development and currently learning React JS and Node JS. I have goal to mastering fullstack developer javascript.
                                Im looking for internship to improve my skill with real life experience.
                            </p>
                        </div>
                    </div>
                </div>
            </Bounce>
        </div>
    </div>
  )
}

export default About