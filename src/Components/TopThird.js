import React, { useState } from "react";
import "./topthird.css";

const TopThird = () => {
	const [firstName, setFirstName] = useState("Tres Bednarz");
	const [jobTitle, setJobTitle] = useState("Sofware Developer");
	const firstNameChange = (e) => {
		setFirstName(e.target.value);
	};
	const jobTitleChange = (e) => {
		setJobTitle(e.target.value);
	};

	return (
		<div id="top-third-box">
			<input id="top-third-input" value={firstName} onInput={firstNameChange} />
			<input id="top-third-second-input" value={jobTitle} onInput={jobTitleChange} />
		</div>
	);
};

export default TopThird;
