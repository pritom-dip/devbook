import React, { useState } from "react";
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
import Account from "./Account/Account.component";

const NavbarLastPart = () => {
	const renderTooltip = (props) => <Tooltip {...props}> {props}</Tooltip>;
	const [isAccountClick, setIsAccountClick] = useState("none");

	const accountClickHandle = () => {
		isAccountClick == "none"
			? setIsAccountClick("block")
			: setIsAccountClick("none");
	};

	return (
		<div className="navbarLastPart  ">
			<Link to="/profile">
				<Button>Profile</Button>
			</Link>
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
				<Link onClick={accountClickHandle}>
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
			<div style={{ display: isAccountClick }}>
				<Account />
			</div>
		</div>
	);
};

export default NavbarLastPart;
