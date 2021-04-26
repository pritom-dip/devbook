import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

import {
	faBell,
	faCommentDots,
	faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const NavbarLastPart = () => {
	const renderTooltip = (props) => <Tooltip {...props}> {props}</Tooltip>;

	return (
		<div className="navbarLastPart  ">
			<Link to='/profile'><Button>Profile</Button></Link>
			<OverlayTrigger
				placement="bottom"
				overlay={renderTooltip("Message")}
			>
				<Link>
					<div className="lastMenuPart">
						{" "}
						<FontAwesomeIcon
							style={{ fontSize: "20px" }}
							icon={faCommentDots}
						/>
					</div>
				</Link>
			</OverlayTrigger>
			<OverlayTrigger
				placement="bottom"
				overlay={renderTooltip("Notification")}
			>
				<Link>
					{" "}
					<div className="lastMenuPart">
						{" "}
						<FontAwesomeIcon
							style={{ fontSize: "20px" }}
							icon={faBell}
						/>
					</div>
				</Link>
			</OverlayTrigger>
			<OverlayTrigger
				placement="bottom"
				overlay={renderTooltip("Account")}
			>
				<Link>
					{" "}
					<div className="lastMenuPart">
						{" "}
						<FontAwesomeIcon
							style={{ fontSize: "20px" }}
							icon={faCaretDown}
						/>
					</div>
				</Link>
			</OverlayTrigger>
		</div>
	);
};

export default NavbarLastPart;
