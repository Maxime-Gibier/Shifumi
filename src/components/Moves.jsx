import React from "react";
import Pierre from "../assets/img/Pierre.png";
import Feuille from "../assets/img/Feuille.png";
import Ciseaux from "../assets/img/Ciseaux.png";

const Moves = ({ handleMove, moveUser1, moveUser2, moveWinner }) => {
	return (
		<>
			<div className="flex w-full h-full justify-center items-center">
				<span className="m-auto">
					<img className="w-24 h-24" alt="move user1" src={moveUser1} />
				</span>
				<h5 className="font-text">{moveWinner !== undefined ? moveWinner : ""}</h5>
				<span className="m-auto">
					<img className="w-24 h-24" alt="move user2" src={moveUser2} />
				</span>
			</div>
			<span className="mb-4 w-1/2 h-4/5 flex mx-auto items-end justify-around font-text pb-8">
				<span className="flex flex-col items-center">
					<button onClick={() => handleMove("rock")}>
						<img
							src={Pierre}
							alt="Pierre"
							className="h-[100px] mx-8 rounded-3xl border border-black mb-4"
						/>
					</button>
					<h6>Pierre</h6>
				</span>
				<span className="flex flex-col items-center">
					<button onClick={() => handleMove("paper")}>
						<img
							src={Feuille}
							alt="Feuille"
							className="h-[100px] mx-8 rounded-3xl border border-black mb-4"
						/>
					</button>
					<h6>Feuille</h6>
				</span>
				<span className="flex flex-col items-center">
					<button onClick={() => handleMove("scissors")}>
						<img
							alt="Ciseaux"
							className="h-[100px] mx-8 rounded-3xl border border-black mb-4"
							src={Ciseaux}
						></img>
					</button>
					<h6>Ciseaux</h6>
				</span>
			</span>
		</>
	);
};

export default Moves;
