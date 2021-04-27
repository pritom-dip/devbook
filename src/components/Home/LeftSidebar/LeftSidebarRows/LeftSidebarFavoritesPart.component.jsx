import React from "react";
import "./LeftSidebarRows.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";

const LeftSidebarFavoritesPart = () => {
	return (
		<div className="left-sidebar-rows-style">
			<Link to="" className="d-flex align-items-center">
				<div>
					<FontAwesomeIcon
						style={{ fontSize: "30px" }}
						icon={faStar}
					/>
				</div>
				<div className="  d-flex justify-content-between align-items-center ml-3">
					<div
						style={{
							fontSize: "18px",
							fontWeight: "500",
						}}
					>
						Favorites
					</div>
				</div>
			</Link>
		</div>
	);
};

export default LeftSidebarFavoritesPart;
