import React, { useContext } from "react";
import Bouton from "../components/Bouton";
import { AuthContext } from "../contexts/AuthContext";
import { GameContext } from "../contexts/GameContext";
import { useNavigate } from "react-router-dom";

const Play = () => {
	const { logout } = useContext(AuthContext);
	const { getGames, postGames } = useContext(GameContext);
	const navigate = useNavigate();

	function handleJoin() {
		getGames();
		postGames().then(() => navigate("/games"));
	}

	return (
		<div className="w-screen flex flex-col justify-center items-center pt-44">
			<Bouton
				primary={false}
				text="Trouver une partie"
				small={false}
				onClick={handleJoin}
			/>
			<Bouton
				primary={true}
				text="se deconnecter"
				small={true}
				onClick={logout}
			/>
		</div>
	);
};

export default Play;
