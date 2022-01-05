import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import { HomePageContainer } from "./pages/HomePage/containers/HomePageContainer";
import { Router } from "./routes/Router";

import "./styles/index.scss";

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<Router>
				<HomePageContainer />
			</Router>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
