import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";

import "@fontsource-variable/dm-sans";
import "@fontsource-variable/dm-sans/wght.css";
import "@fontsource-variable/dm-sans/wght-italic.css";

import App from "./App";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<React.StrictMode>
		<MantineProvider>
			<App />
		</MantineProvider>
	</React.StrictMode>,
);
