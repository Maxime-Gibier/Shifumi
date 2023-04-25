import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../contexts/GameContext";
import { useNavigate } from "react-router-dom";
import Bouton from "./Bouton";

const Winner = () => {
	const { currentGame } = useContext(GameContext);
	const [text, setText] = useState("")
	useEffect(() => {
		if (currentGame.winner === null) {
			setText("It's a Draw")
		} else {
			currentGame.winner.username !== null ? setText(currentGame.winner.username + " is the winner") : setText("It's a Draw");
		}
	})
	const navigate = useNavigate();

	return (
		<span className="flex flex-col justify-center items-center h-3/5">
			<h3 className="font-text text-5xl my-20">{text}</h3>
			<Bouton
				primary={true}
				text="Quitter"
				small={true}
				onClick={() => navigate("/play")}
			/>
		</span>
	);
};

export default Winner;
