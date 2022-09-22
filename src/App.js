import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from "./ItemListContainer/index";
import ItemDetailContainer from "./ItemDetailContainer";
import CartProvider from "./context/CartContext";
import Cart from "./Cart/cart";



function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<NavBar />
					<Routes>
						<Route path="/" element={<ItemListContainer />} />
						<Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
					</Routes>
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;