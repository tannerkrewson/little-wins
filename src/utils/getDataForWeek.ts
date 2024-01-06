import { type Counts } from "./useCountTracker";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const getDataForWeek = (
	weeksAgo: number,
	counts: Counts,
): Array<{ dayOfWeek: string; "Little Wins": number }> => {
	const currentDate = new Date();
	const startDate = new Date(currentDate);
	startDate.setDate(
		currentDate.getDate() - weeksAgo * 7 - currentDate.getDay(),
	);

	return Array.from({ length: 7 }, (_, i) => {
		const currentDate = new Date(startDate);
		currentDate.setDate(startDate.getDate() + i);

		const dayOfWeek = DAYS_OF_WEEK[i];
		const formattedDate = currentDate.toISOString().split("T")[0];

		const count = counts[formattedDate] || 0;

		return { dayOfWeek, "Little Wins": count };
	});
};
