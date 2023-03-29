import React, { useContext, useEffect } from "react";
import Input from "../components/Input";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const LoginView = () => {
	const { user, login } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		// eslint-disable-next-line eqeqeq
		if (user != false) return navigate("/login");
	}, [user, navigate]);

	function handleLogin(event) {
		event.preventDefault();
		const data = Object.fromEntries(new FormData(event.currentTarget));
		login(data.email, data.password)
			.then(() => {
				console.log("Succefully login");
				navigate("/play");
			})
			.catch((e) => console.error("Login failed", e.message));
	}

	return (
		<div className="w-screen flex flex-col justify-center items-center font-text">
			<form className="w-[500px] flex flex-col" onSubmit={handleLogin}>
				<Input
					type={"email"}
					name={"email"}
					text={"e-mail"}
					autoComplete={"email"}
				/>
				<Input type={"password"} name={"password"} text={"Password"} />
				<input
					type="submit"
					value="se connecter"
					className="w-fit bg-black text-white px-12 py-4 rounded-2xl mx-auto"
				/>
			</form>
			<Link to="/register">
				<u className="text-xs">Pas encore inscrit ? s'inscrire</u>
			</Link>
		</div>
	);
};

export default LoginView;
