import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";

// pages
import Home from "./pages/home.pages";
import About from "./pages/about.pages";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>A cucchiara de legno</h1>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
				</nav>
			</header>
			<Routes>
				<Route index element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
			</Routes>
		</div>
	);
}

export default App;
