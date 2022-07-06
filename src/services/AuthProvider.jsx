import React, { useState, createContext, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth, signInWithGoogle } from '../firebase.config';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [authed, setAuthed] = useState(false);
	const navigate = useNavigate();
	const redirectAfterAuth = async () => {
		try {
			onAuthStateChanged(auth, (user) => {
				if (user) {
					navigate('/');
				} else {
					navigate('/connexion');
				}
			});
		} catch (err) {
			console.error(err);
			alert(err.message);
		}
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			console.log(user);
			if (user) {
				setAuthed(true);
			} else {
				setAuthed(false);
			}
		});
	}, []);

	const login = async (email, password) => {
		try {
            console.log(auth,email,password)
			await signInWithEmailAndPassword(auth, email, password);
			alert('Connexion reussie ! ');
		} catch (err) {
			console.error(err);
			alert(err.message);
		}
		redirectAfterAuth();

		const result = onAuthStateChanged(auth);
		if (result) {
			setAuthed(true);
		}
	};

	/**
	 * Lorsque l'utilisateur clique sur le bouton, connectez-vous avec Google, puis vérifiez si
	 * l'utilisateur est connecté, si c'est le cas, accédez à la page d'accueil, sinon, accédez à la page
	 * de connexion.
	 */
	const loginWithGoogle = async () => {
		signInWithGoogle();
		redirectAfterAuth();

		const result = onAuthStateChanged(auth);
		if (result) {
			setAuthed(true);
		}
	};

	const logout = async () => {
		signOut(auth);
		alert('Deconnexion reussie ! ');
	};

	return (
		<AuthContext.Provider
			value={{ authed, setAuthed, login, logout, loginWithGoogle }}>
			{children}
		</AuthContext.Provider>
	);
};

/**
 * Il renvoie la valeur de l'objet AuthContext
 */
export const useAuth = () => useContext(AuthContext);
