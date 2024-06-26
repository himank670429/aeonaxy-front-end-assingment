import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import DataProvider from "./context/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HashRouter>
			<DataProvider>
				<App />
			</DataProvider>
		</HashRouter>
	</React.StrictMode>
);
