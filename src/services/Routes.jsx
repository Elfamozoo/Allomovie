import React from 'react';
import { Navigate } from 'react-router-dom';
import Home from '../components/Layout/Home/Home';
import Connexion from '../components/Connexion/Connexion';
import Inscription from './../components/Inscription/Inscription';
import Favoris from './../components/Favoris/Favoris';

const Routes = (user) => [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/inscription',
		element: user ? <Navigate to='/' /> : <Inscription />,
	},
	{
		path: '/connexion',
		element: user ? <Navigate to='/' /> : <Connexion />,
	},
	{
		path: '/favoris',
		element: user ? <Favoris /> : <Navigate to='/connexion' />,
	},
];

export default Routes;
