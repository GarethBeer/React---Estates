import React from "react";

const NavBar = () => {
	return (
		<nav className="navbar-container">
			<div className="navbar-logo">
				<i className="fas fa-home"></i>
				<span>Surreal Estates</span>
			</div>
			<ul>
				<li>Properties</li>
				<li>Add Properties</li>
				<li>Favourites</li>
			</ul>
			<div className="sign-on">
				<i className="fas fa-user"></i>
				<span>Sign In</span>
			</div>
		</nav>
	);
};

export default NavBar;
