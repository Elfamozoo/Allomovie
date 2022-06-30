import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import Navbar from './components/Layout/Navbar/Navbar';
import Home from './components/Layout/Home/Home';
import Footer from './components/Layout/Footer/Footer';

function App() {
	let element = useRoutes([
		{
			path: '/',
			element: <Home />,
		},
	]);

	return (
		<>
			<Navbar />
			{element}
			<Footer />
		</>
	);
}

export default App;
