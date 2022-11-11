import React,{useState} from 'react'
import "./Sidebar.css";
import Home from '../Home/Home';
import { GoChevronRight,GoChevronLeft } from "react-icons/go";
import SidebarList from '../Sidebar/SidebarList';

const Sidebar = ({theme,changeTheme}) => {
  const [expandSidebar,setExpandSidebar] = useState(true);

  const handleExpandClick = () => {
    setExpandSidebar(!expandSidebar);
  }

  return (
    <div className='container-fluid sidebar-section'>
        <div className={expandSidebar ? 'sidebar-expand sidebar' :'sidebar'}>

          <div className='icon-for-sidebar-expand-and-collapse'>
            <p onClick={handleExpandClick}>
            {expandSidebar ? (
              <GoChevronLeft size={35}/>
            ):(
              <GoChevronRight size={35}/>
            )}
            </p>
          </div>
          <SidebarList expandSidebar={expandSidebar}/>
        </div>
        
        <div className='container'>
            <Home  changeTheme={changeTheme} theme={theme}/>
        </div>
    </div>
  )
}

export default Sidebar