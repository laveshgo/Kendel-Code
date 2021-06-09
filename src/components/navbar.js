import React from "react";
import '../Styles/navbar.css';
import { Link, withRouter } from "react-router-dom";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ClassIcon from '@material-ui/icons/Class';
import PeopleIcon from '@material-ui/icons/People';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ReceiptIcon from '@material-ui/icons/Receipt';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function NavBar(props){

    return (
        <div className="navbar">
            <div className="container">
             <ul>
                <Link to="/profile">
                  <li className="liText" >
                    <PersonOutlineIcon  className="icon"/>
                    Profile
                  </li>{" "}
                </Link>
                <Link  to="/dashboard">
                  <li className="liText"> 
                    <DashboardIcon  className="icon" />         
                    Dashboard                  
                  </li>{" "}
                </Link>
                <hr />
                <p>Main</p>
                <Link  to="/classes">
                  <li className="liText"> 
                    <ClassIcon  className="icon" />         
                    Classes                  
                  </li>{" "}
                </Link>
                <Link  to="/staff">
                  <li className="liText"> 
                    <PeopleIcon  className="icon" />         
                    Staff                  
                  </li>{" "}
                </Link>
                <Link  to="/students">
                  <li className="liText"> 
                    <PeopleIcon  className="icon" />         
                    Students                  
                  </li>{" "}
                </Link>
                <Link  to="/exam">
                  <li className="liText"> 
                    <LiveHelpIcon  className="icon" />         
                    Exam                  
                  </li>{" "}
                </Link>
                <Link  to="/curriculam">
                  <li className="liText"> 
                    <ReceiptIcon  className="icon" />         
                    Curriculam                  
                  </li>{" "}
                </Link>
                <Link  to="/timetable">
                  <li className="liText"> 
                    <CheckBoxIcon  className="icon" />         
                    Time Table                  
                  </li>{" "}
                </Link>              
                <Link  to="/teahcerattendence">
                  <li className="liText">
                    <EventAvailableIcon  className="icon" />
                    Staff Attendence{" "}
                  </li>
                </Link>
                <Link  to="/studentattendence">
                  <li className="liText"> 
                    <PeopleIcon className="icon"/>         
                    Student Atttendence                 
                  </li>{" "}
                </Link>
                <hr />
                <p>Others</p>
                <Link  to="/settings">
                  <li className="liText">
                    <SettingsIcon  className="icon" />
                    Settings{" "}
                  </li>
                </Link>
                <Link  to="/logout">
                  <li className="liText">
                    <ExitToAppIcon  className="icon" />
                    Logout{" "}
                  </li>
                </Link>
                
              </ul>
              
           </div>   
        </div>
    )
}

export default NavBar;