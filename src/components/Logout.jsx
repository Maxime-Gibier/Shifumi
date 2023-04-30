import React, { useContext } from "react";
import Bouton from "./Bouton";
import { AuthContext } from "../contexts/AuthContext";

const Logout = () => {
	const { logout } = useContext(AuthContext);

	return (
		<span className="absolute top-20 right-16">
			<Bouton
				primary={true}
				text="se deconnecter"
				small={true}
				onClick={logout}
			/>
		</span>
	);
};

export default Logout;
