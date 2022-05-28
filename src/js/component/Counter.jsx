import React from "react";

const Counter = ({ numero1, numero2, numero3, numero4, numero5, numero6 }) => {
	let timeClock = 0;
	const count = () => {
		timeClock += 1;
		console.log(timeClock);
		return timeClock;
	};

	const empezarCuenta = () => {
		setInterval(() => {
			count();
		}, 1000);
	};

	return (
		<>
			<div className="counter-container">
				<p>{numero6}</p>
				<p>{numero5}</p>
				<p>{numero4}</p>
				<p>{numero3}</p>
				<p>{numero2}</p>
				<p>{numero1}</p>
			</div>
		</>
	);
};

export default Counter;
