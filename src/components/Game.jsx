import React, { useContext, useEffect } from "react";
import { GameContext } from "../contexts/GameContext";
import Moves from "./Moves";
import Winner from "./Winner";

const Game = () => {
	const { getGames, currentGame } = useContext(GameContext);

	useEffect(() => {
		getGames();
	}, []);

	return (
		<div className="flex w-full h-4/6 flex-col absolute bottom-0">
			<span className="flex h-1/5 w-full font-text justify-around items-center px-60">
				<h5 className="text-2xl">
					{currentGame.user1.username ? currentGame.user1.username : "en attente ..."}
				</h5>
				<p>vs</p>
				<h5 className="text-2xl">
					{currentGame.user2 !== null ? currentGame.user2.username : "en attente ..."}
				</h5>
            </span>
            {currentGame.winner !== undefined ? <Winner />:<Moves />}
			
		</div>
	);
};

export default Game;
