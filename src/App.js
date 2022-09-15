import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from "./ItemListContainer/index";
import ItemDetailContainer from "./ItemDetailContainer";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
				<Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;