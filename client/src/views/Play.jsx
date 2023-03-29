import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Play = () => {
	const { logout } = useContext(AuthContext);
	return (
		<div>
			<button onClick={logout}>Play</button>
		</div>
	);
};

export default Play;
