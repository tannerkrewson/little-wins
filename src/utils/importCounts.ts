import { Counts, LOCAL_STORAGE_KEY } from "./useCountTracker";

export const importCounts = (currentCounts: Counts) => {
	try {
		const inputData = prompt("Import data");
		const importedData = JSON.parse(inputData || "");
		const newCounts = { ...currentCounts, ...importedData };

		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCounts));

		window.location.reload();
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		} else {
			console.log(error);
		}
	}
};
