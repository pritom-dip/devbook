import React from "react";
import "./AccountRows.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faSignOutAlt,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const LogOutRow = () => {
	return (
		<div className="logOutPart account-row-style">
			<Link to="" className="d-flex align-items-center">
				<div className="special-icon-style">
					<FontAwesomeIcon
						style={{ fontSize: "20px" }}
						icon={faSignOutAlt}
					/>
				</div>
				<div className="logOutPartText d-flex justify-content-between align-items-center">
					<div>
						<p style={{ fontWeight: "bold" }}>
							Log Out
						</p>
					</div>
					<div>
						<FontAwesomeIcon
							style={{ fontSize: "20px" }}
							icon={faChevronRight}
						/>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default LogOutRow;
