import React from "react";
import Counter from "./Counter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";
//create your first component
const Home = () => {
	// const [time, setTime] = useState(0);
	let numero;
	const container = document.querySelector(".home-container");
	const count = () => {
		numero = 0;
		setInterval(() => {
			console.log(container);
			numero = numero + 1;
			console.log(numero + 1);
			// return numero;
		}, 1000);
	};
	// count();
	return (
		<div className="home-container">
			<Counter numero={count()} />
			{/* <Counter numero={numero} /> */}
		</div>
	);
};

export default Home;
