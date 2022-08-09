import React, { useState } from "react";

const FormOnlyLowerCase = () => {
	const [email, setEmail] = useState("");

	const isLowerCase = email === email.toLowerCase();

	const errorMessage = isLowerCase ? null : "Email debe ser LowerCase";

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleMail = (e) => {
		setEmail(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<input type="email" name="email" placeholder="email" onChange={handleMail} value={email} />
				<input type="password" name="password" placeholder="email" />
			</div>

			{/* {isLowerCase ? null : <p>Tiene Mayusculas</p>} */}

			<p style={{ color: "red" }}>{errorMessage}</p>

			<button disabled={errorMessage} type="submit">
				Enviar
			</button>
		</form>
	);
};

export default FormOnlyLowerCase;
