import React from "react";
import DeafaultProfileImg from "../images/default-profile-image.png";

const UserAside = ({ profileImageUrl, username}) => (
	<aside className="col-sm-2">
		<div className="panel panel-default">
			<img src={ profileImageUrl || DeafaultProfileImg } alt="{username} className="img-thumbnail />
		</div>
	</aside>
)

export default UserAside;