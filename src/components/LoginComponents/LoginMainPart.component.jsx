import React from "react";
import { Button } from "react-bootstrap";
import LoginForm from "./LoginForm/LoginForm.component";
import "./LoginMainPart.css";
import Modal from "react-modal";
import CreatNewAccountForm from "./RegisterForm/CreatNewAccountForm.component";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		marginTop: "40px",
		transform: "translate(-50%, -50%)",
	},
};

Modal.setAppElement("#root");

const LoginMainPart = () => {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}
	return (
		<div className="LoginMainPart d-flex justify-content-center align-items-center ">
			<div className="row w-75 ">
				<div className="col-7 pt-5">
					<>
						<h1>devbook</h1>
						<h3>
							Davbook helps you connect and
							share with the people in your
							life.
						</h3>{" "}
					</>
				</div>
				<div className="col-5 main-login-colum">
					<LoginForm />
					<hr className="specialLine" />
					<div className="w-50 ml-auto mr-auto mt-3">
						<Button
							variant="info"
							className="p-3"
							onClick={openModal}
						>
							Create New Account
						</Button>

						<Modal
							isOpen={modalIsOpen}
							onRequestClose={closeModal}
							style={customStyles}
							contentLabel="Example Modal"
						>
							<CreatNewAccountForm
								closeModal={closeModal}
							/>
						</Modal>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginMainPart;
