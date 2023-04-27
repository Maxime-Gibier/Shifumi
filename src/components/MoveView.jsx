import React, { useState, useContext, useEffect } from "react";
import { GameContext } from "../contexts/GameContext";
import Pierre from "../assets/img/Pierre.png";
import Feuille from "../assets/img/Feuille.png";
import Ciseaux from "../assets/img/Ciseaux.png";
import Winner from "./Winner";
import Moves from "./Moves";

const MoveView = ({ currentTurn, setCurrentTurn }) => {
	const [moveUser1, setMoveUser1] = useState();
	const [moveUser2, setMoveUser2] = useState();
	const [moveWinner, setMoveWinner] = useState();
	const { currentGame } = useContext(GameContext);
	const { postMove, getGames } = useContext(GameContext);

	async function handleMove(move) {
		getGames();
		postMove(move, currentTurn);
		setCurrentTurn(currentTurn + 1);
	}

	useEffect(() => {
		if (
			currentGame.turns.length > 0 &&
			currentGame.turns[currentTurn - 2] !== undefined &&
			currentGame.turns[currentTurn - 2].user2 !== undefined &&
			currentGame.turns[currentTurn - 2].user1 !== undefined
		) {
			switch (currentGame.turns[currentGame.turns.length - 1].user1) {
				case "rock":
					setMoveUser1(Pierre);
					break;
				case "paper":
					setMoveUser1(Feuille);
					break;
				case "scissors":
					setMoveUser1(Ciseaux);
					break;
				default:
					setMoveUser1("");
			}

			switch (currentGame.turns[currentGame.turns.length - 1].user2) {
				case "rock":
					setMoveUser2(Pierre);
					break;
				case "paper":
					setMoveUser2(Feuille);
					break;
				case "scissors":
					setMoveUser2(Ciseaux);
					break;
				default:
					setMoveUser2("");
					break;
			}

			switch (currentGame.turns[currentGame.turns.length - 1].winner) {
				case "user1":
					setMoveWinner(currentGame.user1.username + " Wins");
					break;
				case "user2":
					setMoveWinner(currentGame.user2.username + " Wins");
					break;
				case "draw":
					setMoveWinner("It's a draw");
					break;
				default:
					setMoveWinner("");
			}
		}
	}, [currentTurn, currentGame]);

	return (
		<>
			{currentGame.winner !== undefined ? (
				<Winner />
			) : (
				<Moves
					moveWinner={moveWinner}
					moveUser1={moveUser1}
					moveUser2={moveUser2}
					handleMove={handleMove}
				/>
			)}
		</>
	);
};

export default MoveView;
