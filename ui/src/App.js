import React, { useEffect, useState } from "react";

const App = () => {
	// Products list state management
	const [productsList, setProductsList] = useState("");
	
	const fetchProducts = async () => {
		const products = await fetch("/products/all")
			.then(res =>{console.log(res); return res;}) 
			.then(res => res.json()); // Process the incoming data
		console.log(products);
		setProductsList(products);
	};

	if(typeof productsList === "object" && productsList !== null){ //eslint-disable-next-line
		Object.keys(productsList).map((item) => {
			console.log(productsList[item]);
			const record = productsList[item];
			for(const [key, value] of Object.entries(record)) {
				console.log(`${key}: ${value}`);
				<p>{`${key}: ${value}`}</p>;
			}
		});
	}

	// useEffect fetches products on initial render only.
	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className="app">
			<p>React app render successful, check console logs for current work state.</p>
		</div>
	);
};

export default App;