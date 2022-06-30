import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.svg';
import { AiOutlineMenu } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

const Navbar = () => {
	return (
		<>
			<nav class='bg-amber-300 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800'>
				<div class='container flex flex-wrap justify-between items-center mx-auto'>
					<Link to='/' class='flex items-center'>
						<img src={Logo} class='mr-3 h-6 sm:h-9' alt='Logo' />
					</Link>
					<div class='flex md:order-2'>
						<button
							type='button'
							class='hidden md:block text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none rounded-full focus:ring-indigo-700 font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800'>
							Connexion
						</button>
						<button
							type='button'
							class='visible lg:invisible text-gray-900 bg-white border border-gray-300 focus:outline-none rounded-full hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-2.5 py-2.5 mr-3 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
							<FcGoogle />
						</button>
						<button
							data-collapse-toggle='mobile-menu-4'
							type='button'
							class='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
							aria-controls='mobile-menu-4'
							aria-expanded='false'>
							<span class='sr-only'>Open main menu</span>
							<AiOutlineMenu />
						</button>
					</div>
					<div
						class='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
						id='mobile-menu-4'>
						<ul class='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
							<li>
								<Link
									to='/'
									class='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white text-lg'
									aria-current='page'>
									Accueil
								</Link>
							</li>
							<li>
								<Link
									to='/favoris'
									class='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-lg'>
									Favoris
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
