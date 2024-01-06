import "./App.css";
import EmojiButton from "./components/EmojiButton";
import useCountTracker from "./utils/useCountTracker";

function App() {
	const { todaysCount, increaseTodaysCount } = useCountTracker();
	return (
		<div className="App">
			<div>{todaysCount}</div>
			<EmojiButton onClick={increaseTodaysCount} />
		</div>
	);
}

export default App;
