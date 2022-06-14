import React from 'react';
import './Navbar.scss';
import Logo from '../../assets/images/Logo.svg';
const Navbar = () => {
	return (
		<nav className="nav_head">
			<div>
				<img src={Logo} alt="Logo" />
			</div>
			<div className="nav_links_container">
				<li>Auctions</li>
				<li>Roadmap</li>
				<li>Discover</li>
				<li>Community</li>
			</div>
			<div className="nav_buttons">
				<button className="nav_button_contact">Contact</button>
				<button className="nav_button_myaccount">My Account</button>
			</div>
		</nav>
	);
};

export default Navbar;
