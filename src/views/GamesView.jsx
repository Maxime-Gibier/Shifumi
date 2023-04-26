import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../contexts/GameContext";
import Moves from "../components/Moves";
import MoveView from "../components/MoveView";
import Winner from "../components/Winner";

const GamesView = () => {
	const { games, getGames, currentGame, currentTurn } = useContext(GameContext);
	

	useEffect(() => {
		getGames();
    	const intervalId = setInterval(() => {
      		getGames();
	  		if (currentGame && currentGame.user2 !== null) {
		  		clearInterval(intervalId);
	  }
	  return () => clearInterval(intervalId);
    }, 5000);

  }, [currentTurn]);

  if (games) {
    return (
      <div className="flex w-full h-4/6 flex-col absolute bottom-0">
        <span className="flex h-1/5 w-full font-text justify-around items-center px-60">
          <h5 className="text-2xl">
            {currentGame.user1.username
              ? currentGame.user1.username
              : "en attente ..."}
          </h5>
          <p>vs</p>
          <h5 className="text-2xl">
            {currentGame.user2 !== null
              ? currentGame.user2.username
              : "en attente ..."}
          </h5>
			</span>
        {currentGame !== undefined ? <MoveView /> : <></>}
        {currentGame.winner !== undefined ? <Winner /> : <Moves />}
      </div>
    );
  } else {
    return <></>;
  }
};

export default GamesView;
