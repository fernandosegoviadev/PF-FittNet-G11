import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import LoginInit from "../Components/Login/LoginInit"

export default function Login() {

    return (
        <div className="main_login_view">
            <NavBar/>
            <LoginInit/>
        </div>
    )
};