import React from "react";
import "./Account.css";
import FeedbackRow from "./AccountRows/FeedbackRow.component";
import ProfileRow from "./AccountRows/ProfileRow.component";
import SettingRow from "./AccountRows/SettingRow.component";
import HelpRow from "./AccountRows/HelpRow.component";
import DisplayRow from "./AccountRows/DisplayRow.component";
import LogOutRow from "./AccountRows/LogOutRow.component";

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
