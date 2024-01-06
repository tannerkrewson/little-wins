import { ActionIcon, Container, Group } from "@mantine/core";
import { BarChart } from "@mantine/charts";
import {
	IconChevronsLeft,
	IconArrowNarrowLeft,
	IconArrowNarrowRight,
	IconTableImport,
	IconTableExport,
} from "@tabler/icons-react";
import useCountTracker from "../utils/useCountTracker";
import { getDataForWeek } from "../utils/getDataForWeek";
import { useState } from "react";
import { importCounts, exportCounts } from "../utils/countUtils";

function HistoryPage({
	setCurrentPage,
}: {
	setCurrentPage: (newPage: string) => void;
}) {
	const [weekOffset, setWeekOffset] = useState(0);
	const { counts, getHighestCount } = useCountTracker();
	const { thisWeekData, thisWeekString } = getDataForWeek(weekOffset, counts);

	return (
		<>
			<div className="history-chart">
				<BarChart
					h={300}
					data={thisWeekData}
					dataKey="dayOfWeek"
					series={[{ name: "Little Wins", color: "#e5a33d" }]}
					tickLine="y"
					yAxisProps={{ domain: [0, getHighestCount() + 1] }}
				/>
			</div>
			<div className="history-select">
				<ActionIcon
					variant="light"
					color="gray"
					radius="lg"
					size="lg"
					onClick={() => setWeekOffset(weekOffset + 1)}
				>
					<IconArrowNarrowLeft
						style={{ width: "70%", height: "70%" }}
						stroke={1.5}
					/>
				</ActionIcon>
				<div style={{ fontSize: ".5em" }}>{thisWeekString}</div>
				<ActionIcon
					variant="light"
					color="gray"
					radius="lg"
					size="lg"
					disabled={weekOffset <= 0}
					onClick={() => setWeekOffset(Math.max(weekOffset - 1, 0))}
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
				<ActionIcon
					variant="light"
					color="orange"
					size="3em"
					onClick={() => importCounts(counts)}
				>
					<IconTableImport
						style={{ width: "70%", height: "70%" }}
						stroke={1.5}
					/>
				</ActionIcon>{" "}
				<ActionIcon
					variant="light"
					color="orange"
					size="3em"
					onClick={() => exportCounts(counts)}
				>
					<IconTableExport
						style={{ width: "70%", height: "70%" }}
						stroke={1.5}
					/>
				</ActionIcon>
			</Group>
			<div className="tag">
				Little Wins by{" "}
				<a
					href="https://www.tannerkrewson.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Tanner Krewson
				</a>
				<br />
				<a
					href="https://github.com/tannerkrewson/little-wins"
					target="_blank"
					rel="noopener noreferrer"
				>
					View on GitHub
				</a>
			</div>
		</>
	);
}

export default HistoryPage;
