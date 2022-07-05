import React from "react";
import MainLogo from "../img/reactjs-icon.png";

// import ReactDOM from "react-dom/client";

let Navbar = () => {
    return (
			<>
				<nav>
                <img src={MainLogo} alt="react logo" />
                <h1>ReactFacts</h1>
                <p>React Course - Project 1</p>
				</nav>
			</>
		);
};

export default Navbar;
