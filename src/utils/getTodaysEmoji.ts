const DEFAULT_EMOJI = "🪙";

export const getTodaysEmoji = (date = new Date()) => {
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const monthName = date.toLocaleString("default", { month: "long" });

	const isDay = (m: number, d: number) => month === m && day === d;

	if (isDay(1, 1)) return { emoji: "🎉", text: "New Year" };
	if (isDay(2, 14)) return { emoji: "❤️", text: "Valentine's Day" };
	if (isDay(3, 8)) return { emoji: "♀️", text: "International Women's Day" };
	if (isDay(3, 17)) return { emoji: "☘️", text: "St. Patrick's Day" };
	if (isDay(4, 1)) return { emoji: "🤡", text: "April Fool's Day" };
	if (isDay(4, 22)) return { emoji: "🌍", text: "Earth Day" };
	if (isDay(5, 5)) return { emoji: "🌮", text: "Cinco de Mayo" };
	if (isDay(6, 21)) return { emoji: "🌞", text: "Summer Solstice" };
	if (isDay(7, 4)) return { emoji: "🇺🇸", text: "Independence Day" };
	if (isDay(10, 31)) return { emoji: "🎃", text: "Halloween" };
	if (isDay(11, 25)) return { emoji: "🦃", text: "Thanksgiving" };
	if (isDay(12, 25)) return { emoji: "🎄", text: "Christmas" };

	if (day === 1) {
		return { emoji: DEFAULT_EMOJI, text: `first day of ${monthName}` };
	}

	if (date.getDay() === 5) {
		return { emoji: DEFAULT_EMOJI, text: `Friday` };
	}

	return { emoji: DEFAULT_EMOJI, text: null };
};
