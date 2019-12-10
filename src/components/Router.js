import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import { AuthContext } from "../providers/Auth";

const Router = () => {
	const { user } = useContext(AuthContext);

	if (user) {
		return (
			<Switch>
				<Route path={"/dashboard"}>
					<Dashboard />
				</Route>
				<Redirect from={"*"} to={"/dashboard"} />
			</Switch>
		);
	}

	return (
		<Switch>
			<Route path={"/register"}>
				<Register />
			</Route>
			<Redirect from={"*"} to={"/register"} />
		</Switch>
	);
};

export default Router;
