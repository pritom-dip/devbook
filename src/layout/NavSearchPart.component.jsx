import React from "react";
import "./Navbar.css";
const NavSearchPart = () => {
	return (
		<div>
			<form class="form-inline rounded ml-4">
				<input
					class="form-control mr-sm-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
				/>
			</form>
		</div>
	);
};

export default NavSearchPart;
