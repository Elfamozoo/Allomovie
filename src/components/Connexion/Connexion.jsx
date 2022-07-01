import React from 'react';
import {
	logInWithEmailAndPassword,
	signInWithGoogle,
} from '../../firebase.config';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import * as firebase from 'firebase';

const Connexion = () => {
	firebase.auth().onAuthStateChanged((user) => {
		let navigate = useNavigate();
		if (user) {
			navigate('/');
		}
	});
    
	const form = useForm({
		initialValues: {
			login: '',
			password: '',
		},
	});

	return <></>;
};

export default Connexion;
