import React from "react";
import Counter from "./Counter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState, useEffect } from "react";
import { func } from "prop-types";
import Clock from "../component/Clock.jsx";
//create your first componentrSec
const Home = () => {
	const [counterUni, setcounterUni] = useState(0);
	const [counterDec, setcounterDec] = useState(0);
	const [counterCen, setcounterCen] = useState(0);
	const [counterUniM, setcounterUniM] = useState(0);
	const [counterDecM, setcounterDecM] = useState(0);
	const [counterCenM, setcounterCenM] = useState(0);
	useEffect(() => {
		const setCero = (counter) => {
			counter((prevcounter) =>
				prevcounter == 9 ? (prevcounter = 0) : prevcounter + 1
			);
		};
		setInterval(() => {
			setCero(setcounterUni);
		}, 1000);
		setInterval(() => {
			setCero(setcounterDec);
		}, 10000);
		setInterval(() => {
			setCero(setcounterCen);
		}, 100000);
		setInterval(() => {
			setCero(setcounterUniM);
		}, 1000000);
		setInterval(() => {
			setCero(setcounterDecM);
		}, 1000000);
		setInterval(() => {
			setCero(setcounterCenM);
		}, 1000000);
	}, []);

	return (
		<div className="home-container">
			<Counter
				numero1={counterUni}
				numero2={counterDec}
				numero3={counterCen}
				numero4={counterUniM}
				numero5={counterDecM}
				numero6={counterCenM}
			/>
			<Clock></Clock>
		</div>
	);
};

export default Home;
