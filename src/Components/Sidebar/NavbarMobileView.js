import React,{useState} from 'react';
import "./NavbarMobileView.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import {Link} from "react-scroll";
import {
    FcCommandLine,
    FcEngineering,
    FcGraduationCap,
    FcHome,
    FcPortraitMode, FcRating,
    FcSalesPerformance, FcTwoSmartphones
} from "react-icons/fc";
import Switch from "react-switch";



const NavbarMobileView = ({theme,changeTheme}) => {

    const [open,setOpen] = useState(false);

    const handleClick= ()=>{
        setOpen(!open)
    }

    return (
        <div className="mobile-view-navbar">
            <div className="navbar-header">
                <p><GiHamburgerMenu size={30} onClick={handleClick}/></p>
            </div>

            {open ? (<div className="mobile-nav">
                <ul className="nav-list-items">
                    <li className="nav-item-mobile-view">
                        <Link to="home"
                              spy={true}
                              smooth={true}
                              duration={100}
                              offset={-100}
                        >
                            <FcHome size={25}/><strong> Home</strong>
                        </Link>
                    </li>
                    <li className="nav-item-mobile-view">
                        <Link to="about"
                              spy={true}
                              smooth={true}
                              duration={100}
                              offset={-100}
                        >
                            <FcPortraitMode size={25}/><strong> About</strong>
                        </Link>
                    </li>
                    <li className="nav-item-mobile-view">
                        <Link to="work"
                              spy={true}
                              smooth={true}
                              duration={100}
                              offset={-100}
                        >
                            <FcSalesPerformance size={25}/><strong> Work Experience</strong>
                        </Link>
                    </li>
                    <li className="nav-item-mobile-view">
                        <Link to="techstack"
                              spy={true}
                              smooth={true}
                              duration={100}
                              offset={-100}
                        >
                            <FcCommandLine size={25}/><strong> Tech Stack</strong>
                        </Link>
                    </li>
                    <li className="nav-item-mobile-view">
                        <Link to="education"
                              spy={true}
                              smooth={true}
                              duration={100}
                              offset={-100}
                        >
                            <FcGraduationCap size={25}/><strong> Education</strong>
                        </Link>
                    </li>
                    <li className="nav-item-mobile-view">
                        <Link to="project"
                              spy={true}
                              smooth={true}
                              duration={100}
                              offset={-100}
                        >
                            <FcEngineering size={25}/><strong> Project</strong>
                        </Link>
                    </li>
                    <li className="nav-item-mobile-view">
                        <Link to="testimonial"
                              spy={true}
                              smooth={true}
                              duration={100}
                              offset={-100}
                        >
                            <FcRating size={25}/><strong> Testimonial</strong>
                        </Link>
                    </li>
                    <li className="nav-item-mobile-view">
                        <Link to="contact"
                              spy={true}
                              smooth={true}
                              duration={100}
                        >
                            <FcTwoSmartphones size={25}/><strong> Contact</strong>
                        </Link>
                    </li>
                    <li className="nav-item-mobile-view">
                        <Switch checked={theme==="light"} onChange={changeTheme}/>
                    </li>
                </ul>
            </div>):null}


        </div>
    );
};

export default NavbarMobileView;