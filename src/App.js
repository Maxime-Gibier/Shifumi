import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import Header from "./components/Header";
import Play from "./views/Play";
import AuthProvider from "./contexts/AuthContext";
import PrivateRoutes from "./components/PrivateRoutes";
import GameProvider from "./contexts/GameContext";
import GamesView from "./views/GamesView";

function App() {
	return (
		<div className="App h-screen w-screen flex flex-col justify-center items-center">
			<BrowserRouter>
				<Header />
				<AuthProvider>
					<Routes>
						<Route path="/" element={<Navigate to="/login" />}></Route>

						<Route path="/register" element={<RegisterView />}></Route>
						<Route path="/login" element={<LoginView />}></Route>

						<Route
							path="/play"
							element={
								<PrivateRoutes>
									<GameProvider>
										<Play />
									</GameProvider>
								</PrivateRoutes>
							}
						></Route>
						<Route
							path="/games"
							element={
								<PrivateRoutes>
									<GameProvider>
										<GamesView />
									</GameProvider>
								</PrivateRoutes>
							}
						></Route>
					</Routes>
				</AuthProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
