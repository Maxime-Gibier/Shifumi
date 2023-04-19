import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../contexts/GameContext";
import Waiting from "../components/Waiting";
import Game from "../components/Game";

const GamesView = () => {
	const { games } = useContext(GameContext);
	const [waitingText, setWaitingText] = useState("");
	const [play, setPlay] = useState(false);

	useEffect(() => {
		if (games !== undefined) {
			const game = games[games.length - 1];
			game.user2 === null
				? setWaitingText("En attente d'un adversaire")
				: setPlay(true);
		} else setWaitingText("Chargement ...");
	}, [games]);

	return (
		<>
			{!play ? (
				<Waiting text={waitingText} />
			) : (
				<Game game={games[games.length - 1]} />
			)}
		</>
	);
};

export default GamesView;
