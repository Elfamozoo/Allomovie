import React from 'react';
import { Navigate } from 'react-router-dom';
import Home from '../components/Layout/Home/Home';
import Connexion from '../components/Connexion/Connexion';
import Inscription from './../components/Inscription/Inscription';
import Favoris from './../components/Favoris/Favoris';

const Routes = (authed) => [
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
		element: authed ? <Favoris /> : <Navigate to='/login' />,
	},
];

export default Routes;
