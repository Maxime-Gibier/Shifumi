import React from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";

const SubscriptionView = () => {
	return (
		<div className="w-screen flex flex-col justify-center items-center font-text">
			<form className="w-[500px] flex flex-col items-center">
				<Input type={"text"} name={"Pseudo"} text={"Pseudo"} />
				<Input type={"email"} name={"email"} text={"e-mail"} />
				<Input type={"password"} name={"password"} text={"Password"} />
				<Input
					type={"password"}
					name={"confirmation"}
					text={"Confirmation password"}
				/>
				<input
					type="submit"
					value="s'inscrire"
					className="w-fit bg-black text-white px-12 py-4 rounded-2xl"
				/>
			</form>
			<Link to="/connexion">
				<u className="text-xs">Déjà inscrit ? se connecter</u>
			</Link>
		</div>
	);
};

export default SubscriptionView;
