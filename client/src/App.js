import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Authentication from "./authentication/Authentication";
import Inventory from "./inventory/Inventory";

const Authtest = () => {
	const [auth, setAuth] = useState(null);

	let authMessage = "Authenticated?";
	if (auth) {
		authMessage = "You're authenticated!";
	}
	if (!auth) {
		authMessage = "You're not authenticated!";
	}

	return <p>{authMessage}</p>;
};

const App = () => {
	return (
		<>
			<Switch>
				<Route exact path={"/Authentication"}>
					<Authentication />
				</Route>
				<Route exact path={"/Inventory"}>
					<Inventory />
				</Route>
				<Route exact path={"/Authtest"}>
					<Authtest />
				</Route>
			</Switch>
		</>
	);
};

export default App;
