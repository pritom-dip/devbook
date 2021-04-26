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
			<OverlayTrigger
				placement="bottom"
				overlay={renderTooltip("Home")}
			>
				<Link to='/home'>
					{" "}
					<div className="middleMenuPart">
						<FontAwesomeIcon
							style={{ fontSize: "20px" }}
							icon={faHome}
						/>
					</div>
				</Link>
			</OverlayTrigger>

			<OverlayTrigger
				placement="bottom"
				overlay={renderTooltip("Page")}
			>
				<Link>
					<div className="middleMenuPart">
						<FontAwesomeIcon
							style={{ fontSize: "20px" }}
							icon={faFlag}
						/>
					</div>
				</Link>
			</OverlayTrigger>
			<OverlayTrigger
				placement="bottom"
				overlay={renderTooltip("Groups")}
			>
				<Link>
					<div className="middleMenuPart">
						<FontAwesomeIcon
							style={{ fontSize: "20px" }}
							icon={faUsers}
						/>
					</div>
				</Link>
			</OverlayTrigger>
			<OverlayTrigger
				placement="bottom"
				overlay={renderTooltip("Video")}
			>
				<Link>
					<div className="middleMenuPart">
						<FontAwesomeIcon
							style={{ fontSize: "20px" }}
							icon={faVideo}
						/>
					</div>
				</Link>
			</OverlayTrigger>
		</div>
	);
};

export default NavbarMiddlePart;
