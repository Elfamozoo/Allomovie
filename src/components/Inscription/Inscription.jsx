import React from 'react';
import { useForm } from '@mantine/form';
import {
	registerWithEmailAndPassword,
	signInWithGoogle,
} from '../../firebase.config';
import { FcGoogle } from 'react-icons/fc';

const Inscription = () => {
	/* C'est un hook qui vous permet de gérer l'état de votre formulaire. */
	const form = useForm({
		/* Il définit les valeurs initiales du formulaire. */
		initialValues: {
			login: '',
			email: '',
			password: '',
		},

		/* Une fonction qui vérifie la valeur de l'entrée et si elle n'est pas valide, elle renverra un
       message d'erreur. */
		validate: {
			login: (value) => (value.length < 3 ? 'Pseudo trop court' : null),
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Mail invalide'),
			Password: (value) =>
				/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/.test(value)
					? 'Mot de passe invalide'
					: null,
		},
	});

	return (
		<>
			<div className='bg-white rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
				<form
					ClassName='space-y-6'
					action='#'
					onSubmit={form.onSubmit((values) =>
						registerWithEmailAndPassword(
							values.login,
							values.email,
							values.password
						)
					)}>
					<div className='mb-4'>
						<label
							className='block text-grey-darker text-sm font-bold mb-2'
							htmlFor='email'>
							Email
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
							id='email'
							type='email'
							placeholder='tonmail@email.com'
							{...form.getInputProps('email')}
						/>
					</div>
					<div className='mb-4'>
						<label
							className='block text-grey-darker text-sm font-bold mb-2'
							htmlFor='login'>
							Pseudo
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
							id='login'
							type='text'
							placeholder='pseudo'
							{...form.getInputProps('login')}
						/>
					</div>
					<div className='mb-6'>
						<label
							className='block text-grey-darker text-sm font-bold mb-2'
							htmlFor='password'>
							Mot de passe
						</label>
						<input
							className='shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3'
							id='password'
							type='password'
							placeholder='••••••••'
							{...form.getInputProps('password')}
						/>
					</div>
					<div className='flex items-center justify-between'>
						<button
							className='text-sm leading-5 text-center text-white transition-colors bg-gray-500 hover:bg-blue-600 font-bold py-2 px-4 rounded'
							type='submit'>
							S'inscrire
						</button>
						<button
							onClick={signInWithGoogle}
							className='text-3xl leading-5 text-center text-white-500 transition-colors bg-white-500 hover:bg-blue-600 font-bold py-2 px-4 rounded'
							type='button'>
							<FcGoogle />
						</button>
					</div>
				</form>
			</div>
			;
		</>
	);
};

export default Inscription;
