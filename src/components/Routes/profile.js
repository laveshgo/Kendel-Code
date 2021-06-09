import React from 'react'
import profilePic from "../../Images/profilePic.svg";
import "../../Styles/profile.css"

export const profile = () => {
    return (
        <div className="profileRoute">
            <img src={profilePic} alt="" />
            <h1>Director Institute</h1>
        </div>
    )
}
