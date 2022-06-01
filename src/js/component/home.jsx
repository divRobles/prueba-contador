import React from "react";
import Counter from "./Counter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState, useEffect } from "react";
import { func } from "prop-types";
import Clock from "../component/Clock.jsx";
import CuentaAtras from "./CunetaAtras.jsx";
//create your first componentrSec
const Home = () => {
	let ocultarContador = true;
	const [counterUni, setcounterUni] = useState(0);
	const [counterDec, setcounterDec] = useState(0);
	const [counterCen, setcounterCen] = useState(0);
	const [counterUniM, setcounterUniM] = useState(0);
	const [counterDecM, setcounterDecM] = useState(0);
	const [counterCenM, setcounterCenM] = useState(0);

	const funciones = {
		contarDesde0: function setCero(counter) {
			counter((prevcounter) =>
				prevcounter == 9 ? (prevcounter = 0) : prevcounter + 1
			);
			console.log(counterUni);
		},
		cunetaRegresiva: function CuentaAtras(counter) {
			counter((prevcounter) =>
				prevcounter == 9 ? (prevcounter = 0) : prevcounter - 1
			);
		},
	};

	// const setCero = (counter) => {
	// 	counter((prevcounter) =>
	// 		prevcounter == 9 ? (prevcounter = 0) : prevcounter + 1
	// 	);
	// };

	function contarSg(a) {
		// Función Contar Segundos.
		if (a) {
			useEffect(() => {
				let interval = [
					setInterval(() => {
						funciones.contarDesde0(setcounterUni);
						// setCero(setcounterUni);
					}, 1000),
					(interval = setInterval(() => {
						funciones.contarDesde0(setcounterDec);
					}, 10000)),
					// setInterval(() => {
					// 	setCero(setcounterCen);
					// }, 100000);
					// setInterval(() => {
					// 	setCero(setcounterUniM);
					// }, 1000000);
					// setInterval(() => {
					// 	setCero(setcounterDecM);
					// }, 1000000);
					// setInterval(() => {
					// 	setCero(setcounterCenM);
					// }, 1000000);
				];
				return () => clearInterval(interval.foreach((ele) => ele));
			}, []);
		} else {
			useEffect(() => {
				numero = numero
					.split("")
					.map((realNumero) => parseInt(realNumero));
				setcounterUni(numero[5]);
				let interval = [
					setInterval(() => {
						funciones.cunetaRegresiva(setcounterUni);
					}),
				];
				return () => clearInterval(interval.foreach((ele) => ele));
			}, []);
		}
	}
	contarSg(true);

	function establecerCuentaAtras(numero) {
		// useEffect(() => {
		// 	numero = numero.split("").map((realNumero) => parseInt(realNumero));
		// 	setcounterUni(numero[5]);
		// 	let interval = [
		// 		setInterval(() => {
		// 			funciones.cunetaRegresiva(setcounterUni);
		// 		}),
		// 	];
		// });
		// 	const setAtras = (counter) => {
		// 		counter((prevcounter) =>
		// 			prevcounter == 0 ? (prevcounter = 9) : prevcounter - 1
		// 		);
		// 	};
		// 	numero = numero.split("").map((realNumero) => parseInt(realNumero));
		// 	setcounterUni(numero[5]);
		// 	setcounterDec(numero[4]);
		// 	setInterval(() => {
		// 		funciones.cunetaRegresiva(setcounterUni);
		// 	}, 1000);
		// 	// setInterval(() => {
		// 	// 	setAtras(setcounterDec);
		// 	// }, 10000);
	}

	return (
		<div className="home-container">
			<CuentaAtras funcion={() => contarSg(false)} />
			{ocultarContador && (
				<Counter
					numero1={counterUni}
					numero2={counterDec}
					numero3={counterCen}
					numero4={counterUniM}
					numero5={counterDecM}
					numero6={counterCenM}
				/>
			)}
			<Clock></Clock>
		</div>
	);
};

export default Home;
