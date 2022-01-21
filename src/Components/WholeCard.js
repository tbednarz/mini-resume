import React, { useState } from "react";
import BottomThird from "./BottomThird";
import MiddleThird from "./MiddleThird";
import TopThird from "./TopThird";
import "../index.css";

const WholeCard = () => {
	return (
		<div id="whole-card">
			<TopThird />
			<MiddleThird />
			<BottomThird />
		</div>
	);
};

export default WholeCard;
