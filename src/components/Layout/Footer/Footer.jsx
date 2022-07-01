import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillGitlab } from 'react-icons/ai';

const Footer = () => {
	return (
		<footer className='p-4 bg-white sm:p-6 dark:bg-gray-800'>
			<hr className='my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8' />
			<div className='sm:flex sm:items-center sm:justify-between'>
				<span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
					© 2022{' '}
					<a
						href='https://illyeszerga-portfolio.netlify.app/'
						className='hover:underline text-black'>
						Zerga Illyes
					</a>
					. All Rights Reserved.
				</span>
				<div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
					<a
						href='https://github.com/Elfamozoo'
						className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
						<AiFillGithub />
					</a>
					<a
						href='https://gitlab.com/Elfamozoo'
						className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
						<AiFillGitlab />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
