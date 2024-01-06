import { useState } from "react";

const LOCAL_STORAGE_KEY = "COUNT_TRACKER";

export type Counts = { [date: string]: number };

const getCurrentDate = () => {
	const t = new Date();
	const day = ("0" + t.getDate()).slice(-2);
	const month = ("0" + (t.getMonth() + 1)).slice(-2);
	const year = t.getFullYear();
	return `${year}-${month}-${day}`;
};

const useCountTracker = () => {
	const todaysDateKey = getCurrentDate();

	const [counts, setCounts] = useState<Counts>(() => {
		const storedCounts: Counts = JSON.parse(
			localStorage.getItem(LOCAL_STORAGE_KEY) || "{}",
		);
		if (!storedCounts[todaysDateKey]) {
			storedCounts[todaysDateKey] = 0;
		}
		return storedCounts || {};
	});

	const increaseTodaysCount = () => {
		setCounts((prevCounts) => {
			const newCounts: Counts = {
				...prevCounts,
				[todaysDateKey]: prevCounts[todaysDateKey] + 1,
			};
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCounts));
			return newCounts;
		});
	};

	const decreaseTodaysCount = () => {
		setCounts((prevCounts) => {
			const newCounts: Counts = {
				...prevCounts,
				[todaysDateKey]: Math.max(prevCounts[todaysDateKey] - 1, 0),
			};
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCounts));
			return newCounts;
		});
	};

	const getHighestCount = () => {
		const values = Object.values(counts);
		return Math.max(...values);
	};

	return {
		counts,
		increaseTodaysCount,
		decreaseTodaysCount,
		todaysCount: counts[todaysDateKey],
		getHighestCount,
	};
};

export default useCountTracker;
