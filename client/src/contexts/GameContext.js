import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const GameContext = createContext();

export default function GameProvider({ children }) {
	const { user } = useContext(AuthContext);
	const [games, setGames] = useState();

	useEffect(() => {
		const games = JSON.parse(localStorage.getItem("games"));
		if (games) {
			setGames(games);
		} else {
			setGames({});
		}
	}, []);

	async function getGames() {
		const token = user;
		const response = await fetch("http://fauques.freeboxos.fr:3000/matches", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer  ${token}`,
			},
		});
		if (response.status === 200) {
			const data = await response.json();
			localStorage.setItem("games", JSON.stringify(data));
			setGames(data);
		} else {
			throw new Error("matches failed:", response.status);
		}
	}

	return (
		<GameContext.Provider value={{ getGames, games, setGames }}>
			{children}
		</GameContext.Provider>
	);
}
