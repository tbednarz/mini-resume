import React, { useState }from 'react'




export const NewInfoColumn = () => {
    const [firstColumnHeader, setFirstColumnHeader] = useState("Languages");
	const [secondColumnHeader, setSecondColumnHeader] = useState("Technologies");
	const [firstColumnInfo, setFirstColumnInfo] = useState("Add your skills");
	const [secondColumnInfo, setSecondColumnInfo] = useState("Add your skills");
	const changeFirstColumnHeader = (e) => {
		setFirstColumnHeader(e.target.value);
	};

	const changeSecondColumnHeader = (e) => {
		setSecondColumnHeader(e.target.value);
	};
	const firstColumnInfoChange = (e) => {
		setFirstColumnInfo(e.target.value);
	};
	const secondColumnInfoChange = (e) => {
		setSecondColumnInfo(e.target.value);
	};
	const handleKeyDown = (e) => {
		if (e.target.value === "") {
			e.target.style.height = "auto";
		} else {
			e.target.style.height = "inherit";
			e.target.style.height = `${e.target.scrollHeight}px`;
		}
		// In case you have a limitation
		// e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
	};
  return (
   <div id="column">
    <input id="column-header" value={secondColumnHeader} onInput={changeSecondColumnHeader} />
    <textarea
        id="column-info"
        value={secondColumnInfo}
        onInput={secondColumnInfoChange}
        onChange={handleKeyDown}
    />
</div>
  )
}
