import { useState } from "react";

import "./App.css";

import MainPage from "./pages/MainPage";
import HistoryPage from "./pages/HistoryPage";

function App() {
	const [currentPage, setCurrentPage] = useState("MainPage");
	return (
		<div className="App">
			{currentPage === "MainPage" && (
				<MainPage setCurrentPage={setCurrentPage} />
			)}
			{currentPage === "HistoryPage" && (
				<HistoryPage setCurrentPage={setCurrentPage} />
			)}
		</div>
	);
}

export default App;
