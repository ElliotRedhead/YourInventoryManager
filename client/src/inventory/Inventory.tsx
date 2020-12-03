import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

const Inventory = () => {

	type userProducts = [
		{name: string,
		quantity: number,
		expiryDate: string,
		storageLocation: string,
		freezable: boolean | null}
	]

    const [userProducts, setUserProducts] = useState<userProducts>();

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
            .then(data => {return data.json()})
            .then(parsed => {setUserProducts(parsed)})
            .catch(error=>console.log(error));
        }
	
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
            { userProducts ?
            userProducts.map((data, index) => (
                
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
            ))
            : null
        }
		</Table>
		<Button onClick={handleUserButton}>User</Button>
		<Button onClick={handleProductButton}>Product</Button>
		</>

	);
};

export default Inventory;