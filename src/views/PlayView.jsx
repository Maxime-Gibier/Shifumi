import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { useNavigate } from "react-router-dom";
import Bouton from "../components/Bouton";

const PlayView = () => {
	const { getGames, postGames } = useContext(GameContext);
	const navigate = useNavigate();

	function handleJoin() {
		getGames();
		postGames()
			.then(() => navigate("/games"))
			.catch((e) => {
				console.log(e);
				navigate("/games");
				window.alert("You already have a match, waiting for an opponent");
			});
	}

	return (
		<div className="w-screen flex flex-col justify-center items-center pt-44">
			<Bouton
				primary={false}
				text="Trouver une partie"
				small={false}
				onClick={handleJoin}
			/>
		</div>
	);
};

export default PlayView;
