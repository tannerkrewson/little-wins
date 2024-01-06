function EmojiButton({
	emoji,
	onClick,
}: {
	emoji: string;
	onClick: () => void;
}) {
	return (
		<button className="emoji-button" onClick={onClick}>
			{emoji}
		</button>
	);
}

export default EmojiButton;
