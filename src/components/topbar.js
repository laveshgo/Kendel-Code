import React  from "react";
import '../Styles/topbar.css';
import profilePic from "../Images/profilePic.svg";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import NotificationsIcon from '@material-ui/icons/Notifications';

function TopBar(props){

    const drop = () => {
        if (document.getElementById("menu").style.display !== "flex") {
          document.getElementById("menu").style.display = "flex";
        } else if (document.getElementById("menu").style.display !== "none") {
          document.getElementById("menu").style.display = "none";
        }
      };

    return (
        <div className="topbar">

            <div className="logoSection">

                <h1>KenDEL</h1>
                <button onClick={props.onClickked} title ={props.toShow ? "Hide Navigation Bar" :"Show Navigation Bar"} >                   
                    {props.toShow ? <ArrowBackIosIcon/> :<ArrowForwardIosIcon/>}
                </button>
            </div>          

            <Link to="/dashboard">
                <NotificationsIcon className ="notIcon"/>
            </Link>

            <div onClick={drop} id="helper">
                <div id="dropDown">
                    <img src={profilePic} alt="Me"></img>
                    <div id="name">
                        <p id="nameMain">Director Institue</p>
                        <p id="dev">Admin</p>                       
                    </div>   
                    <ArrowDropDownIcon />                                    
                </div>
                <div id="menu">
                    <Link to="/dashboard">
                        <p className="dropDownItem">Dashboard</p>
                    </Link>
                     <Link to="/settings">
                        <p className="dropDownItem">Settings</p>
                    </Link>
                    <Link to="/logout">
                        <p className="dropDownItem">LogOut</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default TopBar;