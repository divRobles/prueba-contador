import React from "react";

const Counter = ({ numero }) => {
	return (
		<>
			<div className="counter-container">
				<p>{numero}</p>
			</div>
		</>
	);
};

export default Counter;
