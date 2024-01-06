import { type Counts } from "./useCountTracker";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type WeekData = {
	thisWeekData: Array<{ dayOfWeek: string; "Little Wins": number }>;
	thisWeekString: string;
};

export const getDataForWeek = (weeksAgo: number, counts: Counts): WeekData => {
	const currentDate = new Date();
	const startDate = new Date(currentDate);
	startDate.setDate(
		currentDate.getDate() - weeksAgo * 7 - currentDate.getDay(),
	);

	const weekStringDate = new Date(startDate);
	const weekStringYear =
		weekStringDate.getFullYear() === currentDate.getFullYear()
			? ""
			: `, ${weekStringDate.getFullYear()}`;

	const thisWeekString = `Week of ${weekStringDate.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
	})}${weekStringYear}`;

	const thisWeekData = Array.from({ length: 7 }, (_, i) => {
		const currentDate = new Date(startDate);
		currentDate.setDate(startDate.getDate() + i);

		const dayOfWeek = `${DAYS_OF_WEEK[i]} ${currentDate.getDate()}`;
		const formattedDate = currentDate.toISOString().split("T")[0];

		const count = counts[formattedDate] || 0;

		return { dayOfWeek, "Little Wins": count };
	});

	return { thisWeekData, thisWeekString };
};
