import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faFlag,
	faVideo,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const NavbarMiddlePart = () => {
	const renderTooltip = (props) => <Tooltip {...props}> {props}</Tooltip>;

	return (
		<div className="middleNavPart">
			<Link to="/home">
				<OverlayTrigger
					placement="bottom"
					overlay={renderTooltip("Home")}
				>
					<div className="middleMenuPart">
						<FontAwesomeIcon
							style={{ fontSize: "20px" }}
							icon={faHome}
						/>
					</div>
				</OverlayTrigger>
			</Link>

			<Link>
				<OverlayTrigger
					placement="bottom"
					overlay={renderTooltip("Page")}
				>
					<div className="middleMenuPart">
						<FontAwesomeIcon
							style={{ fontSize: "20px" }}
							icon={faFlag}
						/>
					</div>
				</OverlayTrigger>
			</Link>

			<Link>
				<OverlayTrigger
					placement="bottom"
					overlay={renderTooltip("Groups")}
				>
					<div className="middleMenuPart">
						<FontAwesomeIcon
							style={{ fontSize: "20px" }}
							icon={faUsers}
						/>
					</div>
				</OverlayTrigger>{" "}
			</Link>

			<Link>
				<OverlayTrigger
					placement="bottom"
					overlay={renderTooltip("Video")}
				>
					<div className="middleMenuPart">
						<FontAwesomeIcon
							style={{ fontSize: "20px" }}
							icon={faVideo}
						/>
					</div>
				</OverlayTrigger>
			</Link>
		</div>
	);
};

export default NavbarMiddlePart;
