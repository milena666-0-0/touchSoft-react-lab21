import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { HomePageContainer } from "./pages/HomePage/containers/HomePageContainer";
import { Router } from "./routes/Router";
import { MainLayout } from "./components/MainLayout/index";
import { configureStore } from "./store/configureStore";

import "./styles/index.scss";

const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<Provider store={store}>
				<MainLayout>
					<Router>
						<HomePageContainer />
					</Router>
				</MainLayout>
			</Provider>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
