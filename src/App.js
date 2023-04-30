import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import GameProvider from "./contexts/GameContext";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import PlayView from "./views/PlayView";
import GamesView from "./views/GamesView";
import PrivateRoutes from "./components/PrivateRoutes";
import Header from "./components/Header";
import Logout from "./components/Logout";



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
					</Routes>
					<Routes>
						<Route
							path="/play"
							element={
								<PrivateRoutes>
									<Logout />
									<GameProvider>
										<PlayView />
									</GameProvider>
								</PrivateRoutes>
							}
						></Route>
						<Route
							path="/games"
							element={
								<PrivateRoutes>
									<Logout />
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
