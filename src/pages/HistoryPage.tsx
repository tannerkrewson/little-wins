import { ActionIcon, Container, Group } from "@mantine/core";
import { BarChart } from "@mantine/charts";
import {
	IconChevronsLeft,
	IconArrowNarrowLeft,
	IconArrowNarrowRight,
} from "@tabler/icons-react";
import useCountTracker from "../utils/useCountTracker";
import { getDataForWeek } from "../utils/getDataForWeek";
import { useState } from "react";

function HistoryPage({
	setCurrentPage,
}: {
	setCurrentPage: (newPage: string) => void;
}) {
	const [weekOffset, setWeekOffset] = useState(0);
	const { counts } = useCountTracker();
	const weekData = getDataForWeek(weekOffset, counts);
	console.log(weekData);

	return (
		<>
			<div style={{ width: "14em", marginLeft: "-1.5em", marginTop: "2em" }}>
				<BarChart
					h={300}
					data={weekData}
					dataKey="dayOfWeek"
					series={[{ name: "Little Wins", color: "#e5a33d" }]}
					tickLine="y"
				/>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					gap: "8em",
					marginBottom: "3em",
				}}
			>
				<ActionIcon
					variant="light"
					color="gray"
					radius="lg"
					size="lg"
					onClick={() => setWeekOffset(weekOffset - 1)}
				>
					<IconArrowNarrowLeft
						style={{ width: "70%", height: "70%" }}
						stroke={1.5}
					/>
				</ActionIcon>{" "}
				<ActionIcon
					variant="light"
					color="gray"
					radius="lg"
					size="lg"
					disabled={weekOffset >= 0}
					onClick={() => setWeekOffset(Math.min(weekOffset + 1, 0))}
				>
					<IconArrowNarrowRight
						style={{ width: "70%", height: "70%" }}
						stroke={1.5}
					/>
				</ActionIcon>
			</div>

			<Group gap="lg">
				<ActionIcon
					variant="light"
					color="orange"
					size="3em"
					onClick={() => setCurrentPage("MainPage")}
				>
					<IconChevronsLeft
						style={{ width: "70%", height: "70%" }}
						stroke={1.5}
					/>
				</ActionIcon>
			</Group>
		</>
	);
}

export default HistoryPage;
