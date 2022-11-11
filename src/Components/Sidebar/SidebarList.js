import React from 'react'
import "./SidebarList.css";
import ProfilePicture from "../Image/pas foto.png";
import { FcHome, FcPortraitMode, FcTwoSmartphones, FcSalesPerformance, FcRating, FcEngineering, FcGraduationCap, FcCommandLine} from "react-icons/fc";
import {Link} from 'react-scroll';

const SidebarList = ({expandSidebar}) => {
  return (
    <React.Fragment>
    {expandSidebar ? (      
      <div className="navbar-items">
        <div className="sidebar-profile-picture">
          <img src={ProfilePicture} alt="Profile"></img>
        </div>

        <ul className="nav-list-items">
          <li className="nav-item">
            <Link to="home"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
            >
              <FcHome size={25}/><strong> Home</strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
            >
              <FcPortraitMode size={25}/><strong> About</strong>
            </Link>
          </li>
          {/*<li className="nav-item">*/}
          {/*  <Link to="work"*/}
          {/*        spy={true}*/}
          {/*        smooth={true}*/}
          {/*        duration={100}*/}
          {/*        offset={-100}*/}
          {/*  >*/}
          {/*    <FcSalesPerformance size={25}/><strong> Work Experience</strong>*/}
          {/*  </Link>*/}
          {/*</li>*/}
          <li className="nav-item">
            <Link to="techstack"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
            >
              <FcCommandLine size={25}/><strong> Tech Stack</strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="education"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
            >
              <FcGraduationCap size={25}/><strong> Education</strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="project"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
            >
              <FcEngineering size={25}/><strong> Project</strong>
            </Link>
          </li>
          {/*<li className="nav-item">*/}
          {/*  <Link to="testimonial"*/}
          {/*        spy={true}*/}
          {/*        smooth={true}*/}
          {/*        duration={100}*/}
          {/*        offset={-100}*/}
          {/*  >*/}
          {/*    <FcRating size={25}/><strong> Testimonial</strong>*/}
          {/*  </Link>*/}
          {/*</li>*/}
          <li className="nav-item">
            <Link to="contact"
                  spy={true}
                  smooth={true}
                  duration={100}
            >
              <FcTwoSmartphones size={25}/><strong> Contact</strong>
            </Link>
          </li>
        </ul>
      </div>) : (
        <div className="navbar-items-icon-only">
        <ul className="nav-list-items">
          <li className="nav-item">
            <Link to="home"
                  spy={true}
                  smooth={true}
                  duration={100}
            ><FcHome size={25}/> </Link></li>
          <li className="nav-item">
            <Link to="about"
                  spy={true}
                  smooth={true}
                  duration={100}
            ><FcPortraitMode size={25}/></Link></li>
          {/*<li className="nav-item"> <FcSalesPerformance size={25}/></li>*/}
          <li className="nav-item">
            <Link to="techstack"
                  spy={true}
                  smooth={true}
                  duration={100}
            ><FcCommandLine size={25}/></Link></li>
          <li className="nav-item">
            <Link to="education"
                  spy={true}
                  smooth={true}
                  duration={100}
            ><FcGraduationCap size={25}/></Link></li>
          <li className="nav-item">
            <Link to="project"
                  spy={true}
                  smooth={true}
                  duration={100}
            ><FcEngineering size={25}/></Link></li>
          {/*<li className="nav-item"> <FcRating size={25}/></li>*/}
          <li className="nav-item">
            <Link to="contact"
                  spy={true}
                  smooth={true}
                  duration={100}
            ><FcTwoSmartphones size={25}/></Link></li>
        </ul>
        </div>
      )}

    </React.Fragment>
  )
}

export default SidebarList