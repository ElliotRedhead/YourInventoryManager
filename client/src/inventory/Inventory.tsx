import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";

const Inventory = () => {
	console.log("The cookies are: \n");
	const [sessionCookie, setCookie] = useCookies();
	if (sessionCookie["sessionjwt"]) {
		console.log("yay cookies!");
	}

	type userProducts = [
		{
			name: string;
			quantity: number;
			expiryDate: string;
			storageLocation: string;
			freezable: boolean | null;
		}
	];

	const [userProducts, setUserProducts] = useState<userProducts>();

	useEffect(() => {
		console.log("Fetching products");
		fetch("/products/all", {
			credentials: "include"
		})
			.then((response) => {
				console.log(response);
				return response;
			})
			.then((data) => {
				return data.json();
			})
			.then((parsed) => {
				setUserProducts(parsed);
			})
			.catch((error) => console.log(error));
	}, []);

	const handleUserButton = () => {
		console.log("Fetching users");
		fetch("/users/all", {
			credentials: "include"
		})
			.then((response) => {
				console.log(response);
				return response;
			})
			.then((data) => {
				return data.text();
			})
			.then((parsed) => console.log(parsed))
			.catch((error) => console.log(error));
	};

	return (
		<>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Name</th>
						<th>Quantity</th>
						<th>Expiry Date</th>
						<th>Storage Location</th>
						<th>Freezable</th>
					</tr>
				</thead>
				{userProducts ?
					userProducts.map((data) => (
						<>
							<tbody>
								<tr>
									<td>{data["name"]}</td>
									<td>{data["quantity"]}</td>
									<td>{data["expiryDate"]}</td>
									<td>{data["storageLocation"]}</td>
									<td>{data["freezable"]}</td>
								</tr>
							</tbody>
						</>
					  )) :
					null}
			</Table>
			<Button onClick={handleUserButton}>User</Button>
		</>
	);
};

export default Inventory;
