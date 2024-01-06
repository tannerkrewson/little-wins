import "./App.css";
import EmojiButton from "./components/EmojiButton";
import { animateEmoji } from "./utils/animateCount";
import useCountTracker from "./utils/useCountTracker";

function App() {
	const { todaysCount, increaseTodaysCount } = useCountTracker();
	return (
		<div className="App">
			<div className="big-count">
				<div className="big-count-coin">🪙</div>
				<div className="big-count-text">{todaysCount}</div>
			</div>
			<div>Little Wins today</div>
			<EmojiButton
				onClick={() => {
					increaseTodaysCount();
					animateEmoji();
				}}
			/>
		</div>
	);
}

export default App;
