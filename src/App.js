import React from "react";
import { MemoizedProducts } from "./components/MemoizedProducts";
import { MemoizedCart } from "./components/MemoizedCarts";
import { Navbar, Container } from "react-bootstrap";

const App = () => {
	return (
		<div className="App">
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">React Shopping-Cart</Navbar.Brand>
				</Container>
			</Navbar>
			<MemoizedProducts />
			<MemoizedCart />
		</div>
	);
};

export default App;
