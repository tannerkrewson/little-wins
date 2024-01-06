export const animateEmoji = () => {
	const emojiButton = document.querySelector(".emoji-button");
	const littleCoin = document.querySelector(".big-count-coin");

	if (!emojiButton || !littleCoin) return;

	const emojiClone = emojiButton.cloneNode(true) as HTMLElement;
	document.body.appendChild(emojiClone);

	const emojiRect = emojiButton.getBoundingClientRect();
	const coinRect = littleCoin.getBoundingClientRect();

	const deltaX =
		coinRect.left + coinRect.width / 4 - (emojiRect.left + emojiRect.width / 4);
	const deltaY =
		coinRect.top + coinRect.height / 4 - (emojiRect.top + emojiRect.height / 4);

	emojiClone.style.position = "absolute";
	emojiClone.style.left = `${emojiRect.left + emojiRect.width / 4}px`;
	emojiClone.style.top = `${emojiRect.top + emojiRect.height / 4}px`;
	emojiClone.style.transition = "transform 1s, font-size 1s, opacity 1s";

	setTimeout(() => {
		emojiClone.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
		emojiClone.style.fontSize = "12px";
		emojiClone.style.opacity = "0";
	}, 10);

	setTimeout(() => {
		emojiClone.remove();
	}, 1000);
};
