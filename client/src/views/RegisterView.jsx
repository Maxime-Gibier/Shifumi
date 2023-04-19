import React, { useContext} from "react";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const RegisterView = () => {
	const { register } = useContext(AuthContext);
	const navigate = useNavigate();

	function handleRegister(event) {
		event.preventDefault();
		const data = Object.values(
			Object.fromEntries(new FormData(event.currentTarget))
		);
		register(...data)
			.then(() => {
				console.log("Succefully registered");
				navigate("/play");
			})
			.catch((e) => console.error("Registration error", e.message));
	}
	return (
		<div className="w-screen flex flex-col justify-center items-center font-text pt-44">
			<form className="w-[500px] flex flex-col" onSubmit={handleRegister}>
				<Input type={"text"} name={"username"} text={"username"} />
				<Input
					type={"password"}
					name={"password"}
					text={"Password"}
					autoComplete={"new-password"}
				/>

				<input
					type="submit"
					value="s'inscrire"
					className="w-fit bg-black text-white px-12 py-4 rounded-2xl mx-auto"
				/>
			</form>
			<Link to="/login">
				<u className="text-xs">Déjà inscrit ? se connecter</u>
			</Link>
		</div>
	);
};

export default RegisterView;
