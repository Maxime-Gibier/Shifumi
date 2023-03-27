import React from "react";
import Input from "../components/Input";

import { Link } from "react-router-dom";

const ConnexionView = () => {
	return (
		<div className="w-screen flex flex-col justify-center items-center font-text">
			<form className="w-[500px] flex flex-col items-center">
				<Input type={"text"} name={"Pseudo"} text={"Pseudo"} />
				<Input type={"password"} name={"password"} text={"Password"} />
				<input
					type="submit"
					value="se connecter"
					className="w-fit bg-black text-white px-12 py-4 rounded-2xl"
				/>
			</form>
			<Link to="/subscription">
				<u className="text-xs">Pas encore inscrit ? s'inscrire</u>
			</Link>
		</div>
	);
};

export default ConnexionView;
