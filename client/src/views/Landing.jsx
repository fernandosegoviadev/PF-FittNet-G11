import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import LandingInfo from "../Components/Landing/LandingInfo"

export default function Landing() {

    return (
        <div className="main_landing">
            <NavBar/>
            <LandingInfo/>
        </div>
    )
}