import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import emailjs from "emailjs-com";
import logo from "../images/messageLogo.png"
import './Home.css';


export const DesplegarInfo = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('gmailMessage', 'template_kk54ase', e.target, 'user_T61OqAFwdj7RvlgUp71p1')
			.then((result) => {
				alert("I got your message!")
			}, (error) => {
				alert(error.message)
			});
		e.target.reset();
	}

	return (
		
			<>
				<Button variant="danger" onClick={handleShow}>Here</Button>

				<Modal className="text-center" show={show} onHide={handleClose}>
					<Modal.Header closeButton>
							<Modal.Title> <img src={logo} className="logo" alt="" /></Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<form className="contact-form" onSubmit={sendEmail}>
							<input type="hidden" name="contact_number" />

							<Form.Group>
								<Form.Label>Your Name</Form.Label>
								<Form.Control type="text" placeholder="Name..." name="name" id="nameInput" />
							</Form.Group>

							<Form.Group>
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Email..." name="email" id="emailInput" />
							</Form.Group>

							<Form.Group controlId="exampleForm.ControlTextarea1">
								<Form.Label>Message</Form.Label>
								<Form.Control as="textarea" rows={3} placeholder="Type.." name="message" id="areaInput" />
							</Form.Group>

							<input type="submit" value="Send" />
						</form>
					</Modal.Body>
				</Modal>

			</>

		

	)
}