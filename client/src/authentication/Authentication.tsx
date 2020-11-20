import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";

const Authentication = () => {

	const [authMode, setAuthMode] = useState("Register");
	const invertAuthMode = () => {
		if (authMode === "Register"){
			setAuthMode("Login")
		} else {
			setAuthMode("Register");
		}
	}

	const handleSubmit = (event : any) => {
		const form = event.currentTarget;
		event.preventDefault();
		if (form.elements !== null){
			fetch(`/users/${authMode.toLowerCase()}`, {
				method:"post",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					"username":form.elements.formUsername.value,
					"email":form.elements.formEmail.value,
					"password": form.elements.formPassword.value
				})
			})
				.then(response => {
					console.log(response);
					return response;
				})
				.catch(error=>console.log(error));

		}
	};
	return (
		<Form onSubmit={(event) => handleSubmit(event)}>
			{/* Username field */}
			<Form.Group controlId="formUsername">
				<Form.Label>Username</Form.Label>
				<Form.Control required type="text" placeholder="Username" />
			</Form.Group>
			{/* Email address field */}
			<Form.Group controlId="formEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Email address" />
				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>
			{/* Password field */}
			<Form.Group controlId="formPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>
			{/* Submit button */}
			<Button variant="primary" type="submit">
				{authMode}
			</Button>
			<p onClick={invertAuthMode}>{(authMode === "Register") ? "Already registered? Login here." : "Need to sign up? Register here."}</p>
		</Form>
	);
};

export default Authentication;