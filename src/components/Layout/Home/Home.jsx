import React, { useEffect, useState } from 'react';
import { fetchPopularTvSeries } from '../../../services/tmdbApi';
const { VITE_TMDB_API_IMAGE: API_IMAGE } = import.meta.env;
import Pagination from '../../Pagination/Pagination';

const Home = () => {
	const [popular, setPopular] = useState([]);
	const [page, setPage] = useState(1);

	const handleButtonPrevious = () => {
		setPage(page == 1 ? 1 : page - 1);
	};

	const handleButtonNext = () => {
		setPage(page == 500 ? 500 : page + 1);
	};

	const handleFetchPopularTvSeries = async () => {
		const data = await fetchPopularTvSeries(page);
		// console.log(data.total_pages);
		setPopular(data.results);
	};

	useEffect(() => {
		handleFetchPopularTvSeries();
	}, [page]);

	// console.log(page);
	return (
		<>
			<div className='container mx-auto py-4 '>
				<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
					{popular.map((series) => (
						<div className='mx-auto max-w-xs overflow-hidden rounded-xl'>
							<img
								className='rounded-t-xl h-96'
								src={`${API_IMAGE}${series.poster_path || series.backdrop.path }`}
								alt={series.name}
							/>
							<div className='flex items-center justify-between bg-gray-900 px-4 py-2'>
								<h1 className='text-lg font-bold text-white'>
									{series.vote_average}
								</h1>
								<button className='transform rounded bg-white px-2 py-1 text-xs font-semibold uppercase text-gray-900 transition-colors duration-200 hover:bg-gray-200 focus:bg-gray-400 focus:outline-none'>
									Favoris
								</button>
							</div>
						</div>
					))}
				</div>
				<Pagination
					handleButtonPrevious={handleButtonPrevious}
					handleButtonNext={handleButtonNext}
				/>
			</div>
		</>
	);
};

export default Home;
