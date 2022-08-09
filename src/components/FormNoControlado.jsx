import React from "react";

const FormNoControlado = () => {
	const login = (email, password) => {
		if (email === "programacionmicael@gmail.com" && password === "asdednamer123") alert("Login correcto");
		else alert("Login incorrecto");
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		//Aca e.target es el form, con . entro a los name de los elementos del form.
		const email = e.target.email.value;
		const password = e.target.password.value;
		login(email, password);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Form No Controlado</h2>
			<input type="text" placeholder="Email" name="email" autoComplete="on" />
			<input type="password" placeholder="Password" name="password" />

			<button type="submit">Enviar</button>
		</form>
	);
};

export default FormNoControlado;
