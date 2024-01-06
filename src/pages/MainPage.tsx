import { ActionIcon, Group } from "@mantine/core";
import { IconArrowBackUp, IconChartBar } from "@tabler/icons-react";
import EmojiButton from "../components/EmojiButton";
import { animateEmoji } from "../utils/animateCount";
import useCountTracker from "../utils/useCountTracker";
import { getTodaysEmoji } from "../utils/getTodaysEmoji";

function MainPage({
	setCurrentPage,
}: {
	setCurrentPage: (newPage: string) => void;
}) {
	const { todaysCount, increaseTodaysCount, decreaseTodaysCount } =
		useCountTracker();
	const { emoji, text } = getTodaysEmoji();
	return (
		<>
			<div className="big-count">
				<div className="big-count-coin">{emoji}</div>
				<div className="big-count-text">{todaysCount}</div>
			</div>
			<div>Little Wins today</div>
			{text && <div style={{ fontSize: "0.5em" }}>Happy {text}!</div>}
			<EmojiButton
				emoji={emoji}
				onClick={() => {
					increaseTodaysCount();
					animateEmoji();
				}}
			/>
			<Group gap="lg">
				<ActionIcon
					variant="light"
					color="orange"
					size="3em"
					onClick={decreaseTodaysCount}
				>
					<IconArrowBackUp
						style={{ width: "70%", height: "70%" }}
						stroke={1.5}
					/>
				</ActionIcon>
				<ActionIcon
					variant="light"
					color="orange"
					size="3em"
					onClick={() => setCurrentPage("HistoryPage")}
				>
					<IconChartBar style={{ width: "70%", height: "70%" }} stroke={1.5} />
				</ActionIcon>
			</Group>
		</>
	);
}

export default MainPage;
