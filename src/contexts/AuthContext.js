import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const navigate = useNavigate()

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			setUser(token);
		} else {
			setUser(false);
		}
	}, []);

	async function login(username, password) {
		const response = await fetch("http://fauques.freeboxos.fr:3000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});
		if (response.status === 200) {
			const data = await response.json();
			localStorage.setItem("token", data.token);
			setUser(data.token);
		} else {
			throw new Error("Login failed:", response.status);
		}
	}
	async function register(username, password) {
		const response = await fetch("http://fauques.freeboxos.fr:3000/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});
		if (response.status === 201) {
			const data = await response.json();
			localStorage.setItem("token", data.token)
			navigate("/play");
		} else {
			throw new Error("Registration failed:");
		}
	}

	async function logout() {
		localStorage.removeItem("token");
		setUser(false);
		console.log("Succefully logout");
	}

	return (
		<AuthContext.Provider value={{ user, login, logout, register }}>
			{children}
		</AuthContext.Provider>
	);
}
