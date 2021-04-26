import React from "react";
import "./Account.css";
import FeedbackRow from "./AccountRows/FeedbackRow";
import ProfileRow from "./AccountRows/ProfileRow";
import SettingRow from "./AccountRows/SettingRow";
import HelpRow from "./AccountRows/HelpRow";
import DisplayRow from "./AccountRows/DisplayRow";
import LogOutRow from "./AccountRows/LogOutRow";

const Account = () => {
	return (
		<div className="AccountPart">
			<div className="accountPartRow">
				<ProfileRow />
			</div>
			<hr className="specialLine" />
			<div className="accountPartRow">
				<FeedbackRow />
			</div>
			<hr className="specialLine" />

			<div className="accountPartRow">
				<SettingRow />
			</div>
			<div className="accountPartRow">
				<HelpRow />
			</div>
			<div className="accountPartRow">
				<DisplayRow />
			</div>
			<div className="accountPartRow">
				<LogOutRow />
			</div>
		</div>
	);
};

export default Account;
