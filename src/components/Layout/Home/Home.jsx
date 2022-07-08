import React, { useEffect, useState } from 'react';
import { fetchPopularTvSeries } from '../../../services/tmdbApi';
const { VITE_TMDB_API_IMAGE: API_IMAGE } = import.meta.env;

const Home = () => {
	const [popular, setPopular] = useState([]);
	const handleFetchPopularTvSeries = async () => {
		const results = await fetchPopularTvSeries();
		setPopular(results);
	};

	useEffect(() => {
		handleFetchPopularTvSeries();
	}, []);

	console.log(popular);

	return (
		<>
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
					{popular.map((series) => (
						<div className='mx-auto max-w-xs overflow-hidden rounded-xl w-96 h-96'>
							<div className='px-4 py-2'>
								<h1 className='text-3xl font-bold uppercase text-gray-800 dark:text-white'>
									{series.name}
								</h1>
							</div>

							<img
								className='rounded-t-xl'
								src={API_IMAGE + series.poster_path}
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
			</div>
		</>
	);
};

export default Home;
