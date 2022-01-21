import WholeCard from "./Components/WholeCard";

function App() {
	return (
		<div className="App">
			<h1>Méni</h1>
			<div style={{ width: "600px", textAlign: "center" }}>
				<h2>Info</h2>
				<p>
					This is a "social card" project ment to make a "mini resume". Not to replace resumes but
					to make a quick "at a glance" view of a persons skills and projects to gain an overall
					understanding of the person in question. All content and styles to be editable
				</p>
			</div>
			<WholeCard />
			<div style={{ textAlign: "center" }}>
				<h1>TO DO:</h1>
				<ul style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
					<li>make middle section height expand if info boxes get too big</li>
					<li>allow color changes for text and box colors</li>
					<li>add inputs to add your own links for bottom icons</li>
					<li>center column headers</li>
					<li>make skills text area into 2 or 3 columns</li>
					<li>
						possibly add section for experience/projects but defeats the purpose of the idea i think
					</li>
					<li>add font family change options</li>
					<li>add a "save card" option </li>
				</ul>
			</div>
		</div>
	);
}

export default App;
