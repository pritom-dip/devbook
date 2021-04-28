import React from "react";
import "./LoginForm.css";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../actions/authActions";

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const dispatch = useDispatch();
	const auth = useSelector(state => state.auth);
	// const cart = useSelector(state => state.cart);

	console.log(auth);

	const onSubmit = (data) => {
		dispatch(login(data));
	}

	return (
		<div className="mt-3 mb-3">
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group controlId="formBasicEmail">
					<Form.Control
						type="email"
						size="lg"
						placeholder="Enter address"
						{...register("email", {
							required: true,
						})}
					/>
					{errors.email && (
						<p className="error-message-style">
							Please enter your valid email
							❗❗
						</p>
					)}
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Control
						size="lg"
						type="password"
						placeholder="Password"
						{...register("password", {
							required: true,
						})}
					/>
					{errors.password && (
						<p className="error-message-style">
							Please enter your password ❗❗
						</p>
					)}
				</Form.Group>

				<Button
					variant="success"
					size="lg"
					type="submit"
					className="w-100"
				>
					Log In
				</Button>
			</Form>
		</div>
	);
};

export default LoginForm;

// mapStateToDispatch={
// 	addToCart : AddToCart
// }

// mapStateToProps = (state) => {
// 	cart: state.cart,
// 	product: state.product
// }