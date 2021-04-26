import React from "react";
import "./AccountRows.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faComment } from "@fortawesome/free-solid-svg-icons";

const FeedbackRow = () => {
	return (
		<div className="feedbackPart ">
			<Link to="" className="d-flex align-items-center">
				<div className="special-icon-style">
					<FontAwesomeIcon
						style={{ fontSize: "20px" }}
						icon={faComment}
					/>
				</div>
				<div className="feedbackText">
					<p style={{ fontWeight: "bold" }}>
						{" "}
						Give Feedback
					</p>
					<p>Help us improve the new DevBook</p>
				</div>
			</Link>
		</div>
	);
};

export default FeedbackRow;
