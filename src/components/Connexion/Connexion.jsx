import React from 'react';
import { useForm } from '@mantine/form';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../../services/AuthProvider';

const Connexion = () => {
	const { login, loginWithGoogle } = useAuth();

	const form = useForm({
		initialValues: {
			email: '',
			password: '',
		},
	});

	return (
		<>
			<div className='bg-white rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
				<form
					className='space-y-6'
					onSubmit={form.onSubmit((values) => {
						console.log(values);
						login(values.email, values.password);
					})}>
					<div className='mb-4'>
						<label
							className='block text-grey-darker text-sm font-bold mb-2'
							htmlFor='email'>
							Email
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
							id='email'
							type='text'
							placeholder='Email'
							{...form.getInputProps('email')}
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
							Connexion
						</button>
						<button
							onClick={loginWithGoogle}
							className='text-3xl leading-5 text-center text-white-500 transition-colors bg-white-500 hover:bg-blue-600 font-bold py-2 px-4 rounded'
							type='button'>
							<FcGoogle />
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Connexion;
