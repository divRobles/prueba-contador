import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../../styles/CuentaAtras.css";

const CuentaAtras = ({ funcion }) => {
	const [numero, setNumero] = useState("");
	let inputNumero = document.querySelector(".input-cuenta-atras");

	let numeros = "0123456789";
	let inputValue = "";
	const numeroCuentaAtras = (e) => {
		inputValue += e.key;
		if (numeros.includes(e.key)) {
			setNumero((numeroo) => (numeroo += e.key));
		} else if (!numeros.includes(e.key)) {
			if (e.key === "Enter") {
				enviarCuentaAtras();
			}
		}
	};

	const enviarCuentaAtras = (e) => {
		console.log(inputValue);
		if (numero && numeros.includes(inputValue)) {
			if (numero.length > 6) {
				alert("El número debe tener 6 dígitos como máximo");
			}
			if (numero.length - 1 < 6) {
				let numeroTrans = `${"0".repeat(6 - numero.length)}${numero}`;
				setNumero(numeroTrans);
				funcion(numeroTrans);
			} else {
				funcion(numero);
			}
		} else {
			alert("debes escribir un numero");
			inputNumero.value = "";
			setNumero("");
		}
	};

	return (
		<div className="conteiner-cuenta-atras">
			<div className="row row-cuenta-atras">
				<div className="col-10 p-0">
					<input
						onKeyDown={numeroCuentaAtras}
						type="text"
						className="input-cuenta-atras"
						placeholder="Numero para cuenta atrás"
					/>
				</div>
				<div className="col-2 p-0 ">
					<div
						onClick={enviarCuentaAtras}
						className="d-flex justify-content-center submit-cuenta-atras">
						Enviar
					</div>
				</div>
			</div>
		</div>
	);
};

export default CuentaAtras;
