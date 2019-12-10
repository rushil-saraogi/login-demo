import React from "react";
import "milligram";
import Router from "./components/Router";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./providers/Auth";
import "./App.css";

function App() {
	return (
		<AuthContext>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</AuthContext>
	);
}

export default App;
