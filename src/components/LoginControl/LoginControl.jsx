import React from 'react';
import { useAuth } from '../../services/AuthProvider';
import { Link } from 'react-router-dom';
const LoginControl = () => {
	const { logout, authed } = useAuth();
	const styles = `block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors +
		 duration-200 transform bg-gray-500 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto`;

	return !authed ? (
		<Link className={styles} to='/connexion'>
			Connexion
		</Link>
	) : (
		<button onClick={logout} className={styles}>
			{' '}
			Deconnexion{' '}
		</button>
	);
};

export default LoginControl;
