import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { HomePageContainer } from "./pages/HomePage/containers/HomePageContainer";
import { Router } from "./routes/Router";

import "./styles/index.scss";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Router>
				<HomePageContainer />
			</Router>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
