import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import { HomePageContainer } from "./pages/HomePage/containers/HomePageContainer";
import { Router } from "./routes/Router";
import { MainLayout } from "./components/MainLayout/index";

import "./styles/index.scss";

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<MainLayout>
				<Router>
					<HomePageContainer />
				</Router>
			</MainLayout>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
