import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/app/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';
import CoinService from './services/coin-service';
import CoinServiceContext from './components/coin-service-context/coin-service-context';

const coinService = new CoinService();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
		<Provider store={store}>
			<CoinServiceContext.Provider value={coinService}>
				<Router>
					<App/>
				</Router>
			</CoinServiceContext.Provider>
		</Provider>
    </React.StrictMode>
);
