import React from "react";
/* Components */
import NavBar from "./Components/NavBar";
import Properties from "./Components/Properties";
import AddProperties from "./Components/addProperties";
import Favourites from "./Components/favourites";

/* Style */
import "./Style/style.css";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Properties />
			<AddProperties />
			<Favourites />
		</div>
	);
}

export default App;
