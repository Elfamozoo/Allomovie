import React from 'react';
import {
	logInWithEmailAndPassword,
	signInWithGoogle,
} from '../../firebase.config';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Connexion = () => {
	// firebase.auth().onAuthStateChanged((user) => {
	// 	let navigate = useNavigate();
	// 	if (user) {
	// 		navigate('/');
	// 	}
	// });

	const form = useForm({
		initialValues: {
			login: '',
			password: '',
		},
	});

	return (
		<>
			<div class='bg-white rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
				<form
					ClassName='space-y-6'
					action='#'
					onSubmit={form.onSubmit((values) =>
						logInWithEmailAndPassword(
							values.login,
							values.password
						)
					)}>
					<div class='mb-4'>
						<label
							class='block text-grey-darker text-sm font-bold mb-2'
							for='login'>
							Pseudo
						</label>
						<input
							class='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
							id='login'
							type='text'
							placeholder='pseudo'
							required
						/>
					</div>
					<div class='mb-6'>
						<label
							class='block text-grey-darker text-sm font-bold mb-2'
							for='password'>
							Mot de passe
						</label>
						<input
							class='shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3'
							id='password'
							type='password'
							placeholder='••••••••'
							required
						/>
					</div>
					<div class='flex items-center justify-between'>
						<button
							class='text-sm leading-5 text-center text-white transition-colors bg-gray-500 hover:bg-blue-600 font-bold py-2 px-4 rounded'
							type='button'>
							Connexion
						</button>
						<button
							onClick={signInWithGoogle}
							class='text-3xl leading-5 text-center text-white-500 transition-colors bg-white-500 hover:bg-blue-600 font-bold py-2 px-4 rounded'
							type='submit'>
							<FcGoogle />
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Connexion;
