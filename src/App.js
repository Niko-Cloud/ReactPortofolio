import React,{useState,createContext} from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import About from './Components/About/About';
import TechStack from './Components/TechStack/TechStack';
import Project from './Components/Project/Project';
import Work from "./Components/Work/Work";
import Education from "./Components/Education/Education";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import "./App.css"
import NavbarMobileView from "./Components/Sidebar/NavbarMobileView";

export const ThemeContext=createContext(null);

const App = () => {

    const [theme,setTheme] = useState("light")

    const changeTheme=()=>{
        setTheme((prev)=>(prev==='light' ? "dark":"light"))
    }

  return (
    <ThemeContext.Provider value={{theme,changeTheme}}>
        <div id={theme}>
            <NavbarMobileView changeTheme={changeTheme} theme={theme}/>
            <Sidebar changeTheme={changeTheme} theme={theme}/>
            <div className="container">
                <About/>
                <Work/>
                <TechStack/>
                <Education/>
                <Project/>
                <Testimonial/>
                <Contact/>
            </div>
        </div>
        <ScrollToTop
            smooth={true}
            color="white"
            width="20px"
            height="20px"
            style={{borderRadius:"90px", backgroundColor:"black"}}
        />

    </ThemeContext.Provider>
  )
}

export default App