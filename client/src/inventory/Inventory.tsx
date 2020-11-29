import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";

const Inventory = () => {

	const handleUserButton = () => {
		console.log("Fetching users");
		fetch("/users/all", {
			credentials: 'include',
		})
			.then(response => {
				console.log(response);
				return response;
			})
			.then(data => {return data.text()})
			.then(parsed => console.log(parsed))
			.catch(error=>console.log(error));
        }
        
    const handleProductButton = () => {
        console.log("Fetching products");
        fetch("/products/all", {
            credentials: 'include',
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
		<Button onClick={handleUserButton}>User</Button>
		<Button onClick={handleProductButton}>Product</Button>
		</>

	);
};

export default Inventory;