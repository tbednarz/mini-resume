import React from "react";
import githubIcon from "../images/github.svg";
import instaIcon from "../images/instaicon.svg";
import linkedinIcon from "../images/linkedin.svg";
import portfolioIcon from "../images/portfolio.svg";

const BottomThird = () => {
	return (
		<div id="bottom-third-box">
			<ul id="link-list">
				<li id="icon-li">
					<img id="icon" alt="github icon" src={githubIcon}></img>
				</li>
				<li id="icon-li">
					{" "}
					<img id="icon" alt="linkedin icon" src={linkedinIcon}></img>
				</li>
				<li id="icon-li">
					{" "}
					<img id="icon" alt="instagram icon" src={instaIcon}></img>
				</li>
				<li id="icon-li">
					{" "}
					<img id="icon" alt="portfolio icon" src={portfolioIcon}></img>
				</li>
			</ul>
		</div>
	);
};

export default BottomThird;
