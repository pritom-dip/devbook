import React from "react";
import "./AccountRows.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faInfoCircle,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const HelpRow = () => {
	return (
		<div className="HelpRowPart ">
			<Link to="" className="d-flex align-items-center">
				<div className="special-icon-style">
					<FontAwesomeIcon
						style={{ fontSize: "20px" }}
						icon={faInfoCircle}
					/>
				</div>
				<div className="helpPartText d-flex justify-content-between align-items-center">
					<div>
						<p style={{ fontWeight: "bold" }}>
							Help & Support
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

export default HelpRow;
