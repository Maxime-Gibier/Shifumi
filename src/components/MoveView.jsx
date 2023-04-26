import React, { useState, useContext, useEffect } from "react";
import { GameContext } from "../contexts/GameContext";
import Pierre from "../assets/img/Pierre.png";
import Feuille from "../assets/img/Feuille.png";
import Ciseaux from "../assets/img/Ciseaux.png";

const MoveView = () => {
	const [moveUser1, setMoveUser1] = useState();
	const [moveUser2, setMoveUser2] = useState();
	const { currentGame, currentTurn } = useContext(GameContext);

    useEffect(() => {
//        console.log("game", currentGame)
//        console.log("turns length > 0",currentGame.turns.length > 0);
//        console.log("turns",currentTurn);
//		console.log(
//			"currentGame.turns[currentTurn - 1] !== undefined",
//			currentGame.turns[currentTurn - 1] !== undefined
//		);
//		console.log(
//			"currentGame.turns[currentTurn - 1]",
//			currentGame.turns[currentTurn - 1]
//		);
//		console.log("currentTurn > 0", currentTurn > 0);
//		console.log(
//			currentGame.turns.length > 0 &&
//				currentGame.turns[currentTurn - 1] !== undefined &&
//				currentGame.turns[currentTurn - 1] &&
//				currentTurn > 0
//		);
		if (
			currentGame.turns.length > 0 &&
			currentGame.turns[currentTurn - 1] !== undefined &&
            currentGame.turns[currentTurn - 1] &&
            currentGame.turns[currentTurn - 1].user2 !== undefined &&
            currentGame.turns[currentTurn - 1].user1 !== undefined &&
			currentTurn > 0
		) {
			switch (currentGame.turns[currentTurn - 1].user2) {
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
					window.alert("Invalide");
			}

			switch (currentGame.turns[currentTurn - 1].user1) {
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
					window.alert("Invalide");
			}
		}
	}, [currentGame, currentTurn]);

	return (
		<div>
			<span>
				<img className="w-24 h-24" src={moveUser2} />
			</span>
			<span>
				<img className="w-24 h-24" src={moveUser1} />
			</span>
		</div>
	);
};

export default MoveView;
