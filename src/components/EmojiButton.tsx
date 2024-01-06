function EmojiButton({ onClick }: { onClick: () => void }) {
	return (
		<button className="emoji-button" onClick={onClick}>
			🪙
		</button>
	);
}

export default EmojiButton;
