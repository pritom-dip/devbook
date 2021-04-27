import "./LeftSidebar.css";
import LeftSidebarFriends from "./LeftSidebarRows/LeftSidebarFriendsPart.component";
import LeftSidebarPages from "./LeftSidebarRows/LeftSidebarPagesPart.component";
import LeftSidebarProfilePart from "./LeftSidebarRows/LeftSidebarProfilePart.component";
import LeftSidebarRecentPart from "./LeftSidebarRows/LeftSidebarRecentPart.component";
import LeftSidebarFavoritesPart from "./LeftSidebarRows/LeftSidebarFavoritesPart.component";
import LeftSidebarAdCenterPart from "./LeftSidebarRows/LeftSidebarAdCenterPart.component";
import LeftSidebarAdManagerPart from "./LeftSidebarRows/LeftSidebarAdManagerPart.component";
import LeftSidebarBloodDonationPart from "./LeftSidebarRows/LeftSidebarBloodDonationPart.component";
import LeftSidebarFriendsListPart from "./LeftSidebarRows/LeftSidebarFriendsListPart.component";
import LeftSidebarGroupsPart from "./LeftSidebarRows/LeftSidebarGroupsPart.component";
import LeftSidebarJobsPart from "./LeftSidebarRows/LeftSidebarJobsPart.component";
import LeftSidebarEventsPart from "./LeftSidebarRows/LeftSidebarEventsPart.component";
export default function LeftSidebarComponent() {
	return (
		<div className="leftSidebarPart">
			<div className="leftSidebarRow">
				<LeftSidebarProfilePart />
			</div>
			<div className="leftSidebarRow">
				<LeftSidebarFriends />
			</div>
			<div className="leftSidebarRow">
				<LeftSidebarPages />
			</div>
			<div className="leftSidebarRow">
				<LeftSidebarRecentPart />
			</div>
			<div className="leftSidebarRow">
				<LeftSidebarFavoritesPart />
			</div>
			<div className="leftSidebarRow">
				<LeftSidebarAdCenterPart />
			</div>
			<div className="leftSidebarRow">
				<LeftSidebarAdManagerPart />
			</div>
			<div className="leftSidebarRow">
				<LeftSidebarEventsPart />
			</div>

			<div className="leftSidebarRow">
				<LeftSidebarBloodDonationPart />
			</div>
			<div className="leftSidebarRow">
				<LeftSidebarFriendsListPart />
			</div>
			<div className="leftSidebarRow">
				<LeftSidebarGroupsPart />
			</div>
			<div className="leftSidebarRow">
				<LeftSidebarJobsPart />
			</div>
		</div>
	);
}
