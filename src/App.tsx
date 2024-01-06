import "./App.css";
import EmojiButton from "./components/EmojiButton";
import useCountTracker from "./utils/useCountTracker";

function App() {
	const { todaysCount, increaseTodaysCount } = useCountTracker();
	return (
		<div className="App">
			<header className="App-header">
				<div>{todaysCount}</div>
				<EmojiButton onClick={increaseTodaysCount} />
			</header>
		</div>
	);
}

export default App;
