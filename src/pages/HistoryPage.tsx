import { ActionIcon, Group } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import useCountTracker from "../utils/useCountTracker";

function HistoryPage({
	setCurrentPage,
}: {
	setCurrentPage: (newPage: string) => void;
}) {
	const { counts } = useCountTracker();
	return (
		<>
			<Group gap="lg">
				<ActionIcon
					variant="light"
					color="orange"
					size="3em"
					onClick={() => setCurrentPage("MainPage")}
				>
					<IconArrowLeft style={{ width: "70%", height: "70%" }} stroke={1.5} />
				</ActionIcon>
			</Group>
		</>
	);
}

export default HistoryPage;
