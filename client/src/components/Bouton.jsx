import React from "react";

const Bouton = ({ primary, text, small, onClick }) => {
	const style = {
		backgroundColor: primary ? "black" : "",
		color: primary ? "white" : "",
		width: small ? "200px" : "500px",
	};
	return (
		<>
			<button
				style={style}
				className={
					"font-text rounded-2xl py-4 mb-8" +
					(primary ? "" : " border-2 border-black")
				}
				onClick={onClick}
			>
				{text}
			</button>
		</>
	);
};

export default Bouton;
