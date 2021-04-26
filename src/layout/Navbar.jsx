import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import NavSearchPart from "./NavSearchPart.component";
import NavbarMiddlePart from "./NavbarMiddlePart.component";
import NavbarLastPart from "./NavbarLastPart.component";

const Navbar = () => {
	return (
		<div className="  navbarPart  ">
			<div className="navbarRow d-flex justify-content-between align-items-center ">
				<div className=" logoPart d-flex justify-content-around align-items-center ">
					<div className="logo">
						<h1>D</h1>
					</div>
					<NavSearchPart />
				</div>

				<NavbarMiddlePart />

				<NavbarLastPart />
			</div>
		</div>
	);
};

export default Navbar;
