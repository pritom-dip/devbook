import React from "react";
import { Link } from "react-router-dom";
import "./AccountRows.css";
import profileImage from "../../../Images/image1.png";

const ProfileRow = () => {
	return (
		<div className="profilePart ">
			<Link to="/profile" className="d-flex align-items-center">
				<div className="profilePhoto">
					<img src={profileImage} alt="" />
				</div>
				<div className="profileText">
					<h5>Ahsan</h5>
					<p>See your profile</p>
				</div>
			</Link>
		</div>
	);
};

export default ProfileRow;
