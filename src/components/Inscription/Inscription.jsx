import React from 'react';
import { useForm } from '@mantine/form';
import {
	registerWithEmailAndPassword,
	signInWithGoogle,
} from '../../firebase.config';

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
			<button
				ClassName='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				type='button'
				data-modal-toggle='authentication-modal'>
				Toggle modal
			</button>
			<div
				id='authentication-modal'
				tabindex='-1'
				aria-hidden='true'
				ClassName='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full'>
				<div ClassName='relative p-4 w-full max-w-md h-full md:h-auto'>
					<div ClassName='relative bg-white rounded-lg shadow dark:bg-gray-700'>
						<button
							type='button'
							ClassName='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
							data-modal-toggle='authentication-modal'>
							
						</button>
						<div ClassName='py-6 px-6 lg:px-8'>
							<h3 ClassName='mb-4 text-xl font-medium text-gray-900 dark:text-white'>
								Inscrivez vous sur Allomovie
							</h3>
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
								<div>
									<label
										for='login'
										ClassName='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
										Votre pseudo
									</label>
									<input
										type='text'
										id='login'
										ClassName='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
										placeholder='pseudo'
										{...form.getInputProps('login')}
										required
									/>
								</div>
								<div>
									<label
										for='email'
										ClassName='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
										Votre email
									</label>
									<input
										type='email'
										id='email'
										ClassName='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
										placeholder='tonmail@email.com'
										{...form.getInputProps('email')}
										required
									/>
								</div>
								<div>
									<label
										for='password'
										ClassName='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
										Votre password
									</label>
									<input
										type='password'
										id='password'
										placeholder='••••••••'
										ClassName='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
										{...form.getInputProps('password')}
										required
									/>
								</div>

								<button
									type='submit'
									ClassName='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
									S'inscrire
								</button>
								<button
									onClick={signInWithGoogle}
									type='submit'
									ClassName='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
									Google
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Inscription;
