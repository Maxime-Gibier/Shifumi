import React from 'react';

const Game = ({game}) => {
    return (
			<div className="flex w-full">
				<div className="w-1/2 flex justify-center items-center">
					{game.user1.username}
				</div>
				<div className="w-1/2 flex justify-center items-center">
					{game.user2.username}
				</div>
			</div>
		);
};

export default Game;