import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.svg';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import { useAuth } from '../../../services/AuthProvider';
import LoginControl from '../../LoginControl/LoginControl';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { logout, authed } = useAuth();

	return (
		<>
			<nav className='bg-amber-300'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center justify-between h-16'>
						<div className='flex items-center'>
							<div className='flex-shrink-0'>
								<Link to='/' class='flex items-center'>
									<img src={Logo} class='mr-3 h-6 sm:h-9' alt='Logo' />
								</Link>
							</div>
							<div className='hidden md:block'>
								<div className='ml-10 flex items-baseline space-x-4'>
									<Link
										to='/'
										className=' text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
										Accueil
									</Link>
									{authed && (
										<Link
											to='/favoris'
											className='text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
											Favoris
										</Link>
									)}
									<LoginControl />
									<Link
										class='block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto'
										to='/inscription'>
										inscription
									</Link>
								</div>
							</div>
						</div>
						<div className='-mr-2 flex md:hidden'>
							<button
								onClick={() => setIsOpen(!isOpen)}
								type='button'
								className=' inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
								aria-controls='mobile-menu'
								aria-expanded='false'>
								{!isOpen ? <AiOutlineMenu /> : <AiOutlineCloseCircle />}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter='transition ease-out duration-100 transform'
					enterFrom='opacity-0 scale-95'
					enterTo='opacity-100 scale-100'
					leave='transition ease-in duration-75 transform'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-95'>
					{(ref) => (
						<div className='md:hidden' id='mobile-menu'>
							<div ref={ref} className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
								<Link
									onClick={isOpen}
									to='/'
									className='text-black-300 hover:bg-gray-700 hover:text-white text-white block px-3 py-2 rounded-md text-base font-medium'>
									Accueil
								</Link>
								{authed ? (
									<Link
										onClick={isOpen}
										to='/favoris'
										className='text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
										Favoris
									</Link>
								) : null}
								<LoginControl />
								<Link
									className='block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto'
									to='/inscription'>
									inscription
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</>
	);
};

export default Navbar;
