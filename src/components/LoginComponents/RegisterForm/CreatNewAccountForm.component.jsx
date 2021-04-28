import React from "react";
import "./CreateNewAccount.css";
import { Button, Col, Form, Modal } from "react-bootstrap";

import { useForm } from "react-hook-form";

const CreatNewAccountForm = ({ closeModal }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div className="createNewAccountFormStyle">
			<Modal.Header className="d-flex justify-content-between">
				<Modal.Title>DevBook</Modal.Title>
				<Button
					variant="danger"
					onClick={() => closeModal()}
				>
					X
				</Button>
			</Modal.Header>

			<Modal.Body>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Form.Row>
						<Form.Group as={Col}>
							<Form.Control
								type="text"
								placeholder="First Name"
								{...register(
									"firstName",
									{
										required: true,
									}
								)}
							/>
							{errors.firstName && (
								<p className="error-message-style">
									Please enter
									first name
								</p>
							)}
						</Form.Group>

						<Form.Group as={Col}>
							<Form.Control
								type="text"
								placeholder="Last Name"
								{...register(
									"lastName",
									{
										required: true,
									}
								)}
							/>
							{errors.lastName && (
								<p className="error-message-style">
									Please enter your
									last name
								</p>
							)}
						</Form.Group>
					</Form.Row>
					<Form.Group controlId="formGridEmail">
						<Form.Control
							type="email"
							placeholder="Enter email"
							{...register("email", {
								required: true,
							})}
						/>
						{errors.email && (
							<p className="error-message-style">
								Please enter your email
							</p>
						)}
					</Form.Group>

					<Form.Group controlId="formGridPassword">
						<Form.Control
							type="password"
							placeholder="Password"
							{...register("password", {
								required: true,
							})}
						/>
						{errors.password && (
							<p className="error-message-style">
								Please enter a password
							</p>
						)}
					</Form.Group>

					<div className="w-75 ml-auto mr-auto">
						<Button
							variant="primary"
							type="submit"
							className="w-100"
						>
							Sign Up
						</Button>
					</div>
				</Form>
			</Modal.Body>
		</div>
	);
};

export default CreatNewAccountForm;
