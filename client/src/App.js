import "./App.css";
import ConnexionView from "./views/ConnexionView";
import SubscriptionView from "./views/SubscriptionView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
	return (
		<div className="App h-screen w-screen flex flex-col justify-center items-center">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/Subscription" element={<SubscriptionView />}></Route>
					<Route path="/connexion" element={<ConnexionView />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
