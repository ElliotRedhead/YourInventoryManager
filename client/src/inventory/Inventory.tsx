import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";

const Inventory = () => {

	const handleButton = () => {
		fetch("/products/all", {
		})
			.then(response => {
				console.log(response);
				return response;
			})
			.then(data => {return data.text()})
			.then(parsed => console.log(parsed))
			.catch(error=>console.log(error));
		}
	
	return (
		<>
		<Table striped bordered hover>
			  <thead>
				<tr>
					<th>#</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Username</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>John</td>
					<td>Doe</td>
					<td>@john.doe</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Jane</td>
					<td>Doe</td>
					<td>@jane.doe</td>
				</tr>
			</tbody>
		</Table>
		<Button onClick={handleButton}></Button>
		</>

	);
};

export default Inventory;