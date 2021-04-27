import React from "react";
import "./LeftSidebarRows.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

const LeftSidebarFriends = () => {
	return (
		<div className="left-sidebar-rows-style leftSidebarFriendsPart">
			<Link to="" className="d-flex align-items-center">
				<div>
					<FontAwesomeIcon
						style={{ fontSize: "30px" }}
						icon={faUserFriends}
					/>
				</div>
				<div className=" d-flex justify-content-between align-items-center ml-3">
					<div style={{ fontWeight: "bold" }}>
						Friends
					</div>
				</div>
			</Link>
		</div>
	);
};

export default LeftSidebarFriends;
