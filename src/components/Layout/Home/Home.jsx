import React from 'react';
import { fetchPopularTvSeries } from '../../../services/tmdbApi';

const Home = () => {
	console.log(fetchPopularTvSeries());
	return <div>Home</div>;
};

export default Home;
