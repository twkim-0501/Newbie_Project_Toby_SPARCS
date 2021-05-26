import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () =>
    <div className="navbar">
        <Link to="/">
            홈
        </Link>
        <Link to="/cody_calander">
            캘린더
        </Link>
        <Link to="/closet">
            옷장
        </Link>
    </div>

export default NavBar;