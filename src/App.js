// import { useEffect } from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {

	const [fetchData, setFetchData] = useState("Test data");

	const fetch = () => {
		fetch("https://localhost:5000/products/all")
			.then(response => {
				if (!response.ok) {console.log(response);
				} else {
					return response;
          
				}
			})
			.then(response =>{ if(response){return response.json();}})
			.then(
				(results) => {
					setFetchData(results);
				}
			);
	};

	

	// const fetch = () => {
	// 	fetch("http://localhost:5000/products/all")
	// 		.then(res => {if (res){res.json();}})
	// 		.then(data => setFetchData(data));
	// };
  
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<button onClick={fetch}>Fetch those products.</button>
				<p>{fetchData}</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
};

export default App;
