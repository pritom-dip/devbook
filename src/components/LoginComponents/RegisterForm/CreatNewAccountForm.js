import React, { useState } from "react";
import "./CreateNewAccount.css";
import { Button, Col, Form, Modal } from "react-bootstrap";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

const CreatNewAccountForm = () => {
	const [startDate, setStartDate] = useState(new Date());
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div className="createNewAccountFormStyle">
			<Modal.Header closeButton>
				<Modal.Title>DevBook</Modal.Title>
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
								<span>
									This field is
									required
								</span>
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
								<span>
									This field is
									required
								</span>
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
							<span>
								This field is required
							</span>
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
							<span>
								This field is required
							</span>
						)}
					</Form.Group>

					<Form.Group controlId="formGridAddress2">
						<Form.Label
							style={{ fontSize: "15px" }}
						>
							Date of birth
						</Form.Label>
						{/* <DatePicker
							locale="es"
							selected={startDate}
							onChange={(date) =>
								setStartDate(date)
							}
						/> */}
					</Form.Group>

					<Form.Row>
						<Form.Group
							as={Col}
							controlId="formGridCity"
						>
							<Form.Label>City</Form.Label>
							<Form.Control />
						</Form.Group>

						<Form.Group
							as={Col}
							controlId="formGridState"
						>
							<Form.Label>State</Form.Label>
							<Form.Control
								as="select"
								defaultValue="Choose..."
							>
								<option>
									Choose...
								</option>
								<option>...</option>
							</Form.Control>
						</Form.Group>

						<Form.Group
							as={Col}
							controlId="formGridZip"
						>
							<Form.Label>Zip</Form.Label>
							<Form.Control />
						</Form.Group>
					</Form.Row>

					<Button variant="primary" type="submit">
						Sign Up
					</Button>
				</Form>
			</Modal.Body>
		</div>
	);
};

export default CreatNewAccountForm;
