import { Routes, Route } from "react-router";

// pages
import Header from "./components/header.components";
import Home from "./pages/home.pages";
import About from "./pages/about.pages";
import Login from "./pages/login.pages";

function App() {
	return (
		<div className="App">
			<Header />

			<Routes>
				<Route index element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/login" element={<Login />}></Route>
			</Routes>
		</div>
	);
}

export default App;
