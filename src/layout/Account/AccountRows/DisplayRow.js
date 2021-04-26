import React from "react";
import "./AccountRows.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMoon, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const DisplayRow = () => {
	return (
		<div className="displayPart ">
			<Link to="" className="d-flex align-items-center">
				<div className="special-icon-style">
					<FontAwesomeIcon
						style={{ fontSize: "20px" }}
						icon={faMoon}
					/>
				</div>
				<div className="displayPartText d-flex justify-content-between align-items-center">
					<div>
						<p style={{ fontWeight: "bold" }}>
							Display
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

export default DisplayRow;
