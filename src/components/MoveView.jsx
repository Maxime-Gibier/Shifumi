import React, { useState, useContext } from 'react';
import { GameContext } from "../contexts/GameContext";
import Pierre from "../assets/img/Pierre.png";
import Feuille from "../assets/img/Feuille.png";
import Ciseaux from "../assets/img/Ciseaux.png";

const MoveView = () => {
    const [moveUser1, setMoveUser1] = useState(Pierre)
    const [moveUser2, setMoveUser2] = useState(Pierre)
    const { currentGame, currentTurn } = useContext(GameContext)
     

    if (currentGame.turns.length > 0 && currentGame.turns[currentTurn] !== undefined && currentGame.turns[currentTurn].length > 1 && currentTurn > 1) {
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
    
    console.log(moveUser1)
    console.log(moveUser2)
    return (
        <div>
            <span><img className="w-24 h-24" src={moveUser2}/></span>
            <span><img className="w-24 h-24" src={moveUser1}/></span>
        </div>
    );
};

export default MoveView;