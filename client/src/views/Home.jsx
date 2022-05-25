import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import HomeMain from "../Components/Home/HomeMain";

export default function Home() {

    return (
        <div className="main_home_view">
            <NavBar/>
            <HomeMain/>
        </div>
    )
}