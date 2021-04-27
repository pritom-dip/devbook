import React from "react";
import "./LeftSidebarRows.css";
import { Link } from "react-router-dom";

import bloodImage from "../../../../Images/blood-drop.png";

const LeftSidebarBloodDonationPart = () => {
	return (
		<div className="leftSidebarBloodDonationsPart left-sidebar-rows-style">
			<Link to="" className="d-flex align-items-center">
				<div>
					<img src={bloodImage} alt="" />
				</div>
				<div className="  d-flex justify-content-between align-items-center ml-3">
					<div
						style={{
							fontSize: "18px",
							fontWeight: "500",
						}}
					>
						Blood Donations
					</div>
				</div>
			</Link>
		</div>
	);
};

export default LeftSidebarBloodDonationPart;
