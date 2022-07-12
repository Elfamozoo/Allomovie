import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer';
import { useAuth } from './services/AuthProvider';
import Routes from './services/Routes';

function App() {
	const { user } = useAuth();
	const routing = useRoutes(Routes(user));

	return (
		<>
			<Navbar />
			{routing}
			<Footer />
		</>
	);
}

export default App;
