import axios from 'axios';
const {
	VITE_TMDB_API_KEY: API_TMDB,
	VITE_TMDB_API_URL_BASE: API_URL_BASE,
	VITE_TMDB_API_TV_POPULAR: API_TV_POPULAR,
	VITE_TMDB_API_LANGUE: API_LANGUE,
} = import.meta.env;
const { VITE_TMDB_API_IMAGE: API_IMAGE } = import.meta.env;

export const fetchPopularTvSeries = (page) => {
	return axios
		.get(`${API_URL_BASE}${API_TV_POPULAR}`, {
			params: { api_key: API_TMDB, language: API_LANGUE, page: page },
		})
		.then((res) => res.data);
};