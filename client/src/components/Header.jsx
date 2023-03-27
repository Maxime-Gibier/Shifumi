import React from "react";
import Feuille from "../assets/img/Feuille.png";
import Ciseaux from "../assets/img/Ciseaux.png";
import Pierre from "../assets/img/Pierre.png";

const Header = () => {
	return (
		<header className="duration-200 flex flex-col items-center justify-center">
			<h1 className="font-title text-8xl mb-4">SHIFUMI TM</h1>
			<span className="mb-4 flex">
				<img src={Pierre} alt="Pierre" className="h-[100px] mx-8" />
				<img src={Feuille} alt="Feuille" className="h-[100px] mx-8" />
				<img src={Ciseaux} alt="Ciseaux" className="h-[100px] mx-8" />
			</span>
		</header>
	);
};

export default Header;
