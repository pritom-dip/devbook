import React from "react";
import "./LeftSidebarRows.css";
import { Link } from "react-router-dom";

import profileImage from "../../../../Images/image1.png";

const LeftSidebarProfilePart = () => {
	return (
		<div className="left-sidebar-rows-style leftSidebarProfilePart">
			<Link to="/profile" className="d-flex align-items-center">
				<div>
					<img src={profileImage} alt="" />
				</div>
				<div style={{ fontWeight: "bold" }}>
					Ahsan Ullah
				</div>
			</Link>
		</div>
	);
};

export default LeftSidebarProfilePart;
