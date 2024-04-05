import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Avatar from "./pages/Avatar";
import EmailConfirm from "./pages/EmailConfirm";
import Options from "./pages/options";
import { useEffect } from "react";
function App() {
	const navigate = useNavigate();
	useEffect(() => {
		navigate('/login')
	}, [])

	return (
		<>
			<Routes>
				<Route element={<Register />} path="/register" />
				<Route element={<Login />} path="/login" />
				<Route element={<Avatar />} path="/avatar" />
				<Route element={<Options />} path="/options" />
				<Route element={<EmailConfirm />} path="/confirm" />
			</Routes>
		</>
	);
}

export default App;
