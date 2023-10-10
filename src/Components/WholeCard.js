import React, { useState } from "react";
import BottomThird from "./BottomThird";
import MiddleThird from "./MiddleThird";
import TopThird from "./TopThird";
import "../index.css";

const WholeCard = () => {
	return (
		<div>
			<div id="whole-card">
				<TopThird />
				<MiddleThird />
				<BottomThird />
			</div>
		</div>
	);
};

export default WholeCard;
