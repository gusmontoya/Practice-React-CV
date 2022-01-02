import React from "react"
import { profile } from './import.js';

export default function Image() {
    return(
        <div className="profile-pic-container">
            <img className="profile-pic" src={profile} alt="profile" />
        </div>
    )
}