import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const GameContext = createContext();

export default function GameProvider({ children }) {
	const { user } = useContext(AuthContext);
	const [games, setGames] = useState();
	const [currentGame, setCurrentGame] = useState();
	const [currentTurn, setCurrentTurn] = useState(1);

	async function getGames() {
		const token = localStorage.getItem("token");
		const response = await fetch("http://fauques.freeboxos.fr:3000/matches", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer  ${token}`,
			},
		});
		if (response.status === 200) {
			const data = await response.json();
			setGames(data);
			setCurrentGame(data[data.length - 1]); 
		} else {
			throw new Error("matches failed:", response.status);
		}
	}

	async function postGames() {
		const token = localStorage.getItem("token");
		const response = await fetch("http://fauques.freeboxos.fr:3000/matches", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
	}

	async function postMove(move, game) {
		const token = user;
		console.log(currentTurn)
		const response = await fetch(
			`http://fauques.freeboxos.fr:3000/matches/${currentGame._id}/turns/${currentTurn}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({ move: `${move}` }),
			}
		);
		if (response.status === 202) {
			console.log( response )
			setCurrentTurn(currentTurn + 1)
			const data = await response.json();
			console.log(currentTurn)
		} else {
			const data = await response.json();
			const error = JSON.stringify(data.match ?? data.user ?? data.turn);
			switch (error) {
				case "not last":
					window.alert("Tour fini recharger la page");
					break;
				case "move already given":
					window.alert("Vous avez déja jouer, en attente dee l'adversaire ...");
					break;
				case "Match alerady finished":
					window.alert("Match fini, recharger la page");
					break;
				default:
					window.alert("Invalide");
			}
		}
	}

	return (
		<GameContext.Provider
			value={{ getGames, games, currentGame,currentTurn, setCurrentTurn, setGames, postGames, postMove }}
		>
			{children}
		</GameContext.Provider>
	);
}