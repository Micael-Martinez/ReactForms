import React, { useState } from "react";

const FormControlado = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = (email, password) => {
		if (email === "asdednamer@gmail.com" && password === "asdednamer123") alert("Login correcto");
		else alert("Login incorrecto");
	};

	const validate = (email, password) => {
		if (!email.includes("@")) return "Email incorrecto";
		if (password.length < 4) return "Contrasena incorrecta";
	};

	//Si contiene caracteres, da true en disabled por lo tanto no se activa el boton
	const errorMessage = validate(email, password);

	const handleSubmit = (e) => {
		e.preventDefault();

		//Aca le paso los estados
		login(email, password);
	};

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};
	return (
		<form onSubmit={handleSubmit}>
			<h2>Form Controlado</h2>
			<input type="text" placeholder="Email" value={email} onChange={handleChangeEmail} />
			<input type="password" placeholder="Password" value={password} onChange={handleChangePassword} />
			<p>{errorMessage}</p>
			<button type="submit" disabled={errorMessage}>
				Submit
			</button>
		</form>
	);
};

export default FormControlado;
