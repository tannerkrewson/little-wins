import { type Counts, LOCAL_STORAGE_KEY } from "./useCountTracker";

export const importCounts = (currentCounts: Counts) => {
	try {
		const inputData = prompt("Import data");

		if (inputData === "CLEAR ALL") {
			localStorage.removeItem(LOCAL_STORAGE_KEY);
			alert("Cleared all data");
			window.location.reload();
		}

		const importedData = JSON.parse(inputData || "");
		const newCounts = { ...currentCounts, ...importedData };

		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCounts));

		window.location.reload();
	} catch (error) {}
};

export const exportCounts = (currentCounts: Counts): void => {
	try {
		const countsString = JSON.stringify(currentCounts);
		navigator.clipboard.writeText(countsString);
		alert("JSON copied to clipboard successfully.");
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		} else {
			console.log(error);
		}
	}
};
