import React from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const Pagination = ({ handleButtonPrevious, handleButtonNext }) => {
	return (
		<div className='flex justify-center'>
			<a
				onClick={handleButtonPrevious}
				on
				className='flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200'>
				<GrFormPrevious />
			</a>

			<a
				onClick={handleButtonNext}
				className='flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200'>
				<GrFormNext />
			</a>
		</div>
	);
};

export default Pagination;
