import React from "react";
import BigLogo from "../img/reactjs-icon 2.png";

let Main = () => {
	return (
		<main>
			<h2>Fun facts about React</h2>
			<ul>
				<li>Was first released in 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has well over 100K stars on GitHub</li>
				<li>Is maintained by Facebook</li>
				<li>Powers thousands of enterprise apps, including mobile apps</li>
			</ul>
			<img src={BigLogo} alt="big logo 2 main" className="main-big-logo"/>
		</main>
	);
};

export default Main;