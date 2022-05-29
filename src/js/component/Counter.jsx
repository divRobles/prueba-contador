import React from "react";
import "../../styles/Counter.css";

const Counter = ({ numero1, numero2, numero3, numero4, numero5, numero6 }) => {
	return (
		<>
			<div className="counter-container">
				<div className="contenedor-numero">
					<p>{numero6}</p>
				</div>
				<div className="contenedor-numero">
					<p>{numero5}</p>
				</div>
				<div className="contenedor-numero">
					<p>{numero4}</p>
				</div>
				<div className="contenedor-numero">
					<p>{numero3}</p>
				</div>
				<div className="contenedor-numero">
					<p>{numero2}</p>
				</div>
				<div className="contenedor-numero">
					<p>{numero1}</p>
				</div>
			</div>
		</>
	);
};

export default Counter;
