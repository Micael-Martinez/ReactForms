import React, { useState } from "react";

const Product = ({ name, price, tag, category }) => {
	return (
		<ol>
			<li>{name}</li>
			<li>{price}</li>
			<li>{tag}</li>
			<li>
				TypeOf
				<span style={{ color: "green", fontSize: 22, margin: 10 }}>
					<strong>{category}</strong>
				</span>
			</li>
		</ol>
	);
};

const App = () => {
	const options = [
		{ value: "", text: "--Choose an option--" },
		{ value: "processor", text: "Proccesor" },
		{ value: "camera", text: "Camera" },
		{ value: "microphone", text: "Microphone" },
	];

	const catalogo = [
		{
			id: 1,
			name: "Processor i9 10900K",
			price: 77000,
			tag: ["Good for gaming", "Good for design"],
			category: "processor",
		},
		{
			id: 2,
			name: "Microfono Yeti Nano",
			price: 11500,
			tag: ["The best in microphone", "Good for comunication"],
			category: "microphone",
		},
		{
			id: 3,
			name: "Ryzen 9 5900x",
			price: 64900,
			tag: ["Good for Render", "Good for design"],
			category: "processor",
		},
		{
			id: 4,
			name: "Camara Logi c902",
			price: 13400,
			tag: ["Good for Streaming"],
			category: "camera",
		},
	];

	const [selected, setSelected] = useState(options[0].value);

	const handleChange = (event) => {
		//agarra el value al clickear el que elegi
		console.log(event.target.value);
		setSelected(event.target.value);
	};

	return (
		<div>
			<h3>Filtering Posts:</h3>
			<select value={selected} onChange={handleChange}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.text}
					</option>
				))}
			</select>

			{catalogo
				.filter((product) => {
					if (product.category === "processor" && selected === "processor") return true;
					if (product.category === "camera" && selected === "camera") return true;
					if (product.category === "microphone" && selected === "microphone") return true;
				})
				.map((product) => {
					return <Product key={product.id} {...product} />;
				})}
		</div>
	);
};

export default App;
