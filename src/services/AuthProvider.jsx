import React, { useState, createContext, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
	setPersistence,
	browserLocalPersistence,
} from 'firebase/auth';
import { auth, signInWithGoogle } from '../firebase.config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
			setUser(currentuser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const redirectAfterAuth = () => {
		try {
			onAuthStateChanged(auth, (currentuser) => {
				if (currentuser) {
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

	const login = (email, password) => {
		try {
			setPersistence(auth, browserLocalPersistence).then(() => {
				return signInWithEmailAndPassword(auth, email, password);
			});
			alert('Connexion reussie !');
		} catch (err) {
			console.error(err);
			alert(err.message);
		}
		redirectAfterAuth();
	};

	const loginWithGoogle = () => {
		setPersistence(auth, browserLocalPersistence).then(() => {
			return signInWithGoogle();
		});
		redirectAfterAuth();
	};

	const logout = () => {
		signOut(auth);
		alert('Deconnexion reussie !');
	};

	return (
		<AuthContext.Provider value={{ user, login, logout, loginWithGoogle }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
