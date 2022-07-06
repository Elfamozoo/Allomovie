import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import Navbar from './components/Layout/Navbar/Navbar';
import Home from './components/Layout/Home/Home';
import Footer from './components/Layout/Footer/Footer';
import Inscription from './components/Inscription/Inscription';
import Connexion from './components/Connexion/Connexion';
import Favoris from './components/Favoris/Favoris';

function App() {
	let element = useRoutes([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/inscription',
			element: <Inscription />,
		},
		{
			path: '/connexion',
			element: <Connexion />,
		},
		{
			path: '/favoris',
			element: <Favoris />,
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
