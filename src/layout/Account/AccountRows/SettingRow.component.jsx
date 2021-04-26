import React from "react";
import "./AccountRows.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCog, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const SettingRow = () => {
	return (
		<div className="settingPart ">
			<Link to="" className="d-flex align-items-center">
				<div className="special-icon-style">
					<FontAwesomeIcon
						style={{ fontSize: "20px" }}
						icon={faCog}
					/>
				</div>
				<div className="settingText d-flex justify-content-between align-items-center">
					<div>
						<p style={{ fontWeight: "bold" }}>
							Setting & Privacy
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

export default SettingRow;
