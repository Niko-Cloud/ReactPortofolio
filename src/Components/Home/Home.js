import React from 'react'
import "./Home.css";
import Typewriter from 'typewriter-effect';
import { MdDarkMode,MdLightMode} from "react-icons/md";
import Fade from 'react-reveal/Fade';

const Home = ({theme,changeTheme}) => {
  return (
    <div className="container-fluid home" id="home">
        <div className="theme-changer" onClick={changeTheme}>
            {theme === "light" ? (<MdDarkMode size={40}/>) : (<p className="sun-theme-icon"><MdLightMode size={40}/></p>)}
        </div>
      <div className="container home-content">
          <Fade left>
              <h1>Hi I'm Indra Niko Saputra</h1>
              <h3>
                  <Typewriter
                      options={{
                          strings: ['Diponegoro University Student', 'Informatics Bachelor','To Be Fullstack Developer'],
                          autoStart: true,
                          loop: true,
                          delay: 75
                      }}
                  />
              </h3>
          </Fade>
          <Fade bottom>
              <div className="button-action">
                  <div className="hire-me-button">
                      Hire Me
                  </div>
                  <div className="get-resume-button">
                      <a href="https://drive.google.com/drive/u/0/folders/1yqkU59923D9AKk1ctAJthidr1kWFSGAI" target="_blank" rel="noreferrer">
                          Get Resume
                      </a>
                  </div>
              </div>
          </Fade>
      </div>
    </div>
  )
}

export default Home