import axios from 'axios';
const { VITE_TMDB_API_KEY: API_TMDB } = import.meta.env;
const { VITE_TMDB_API_URL_BASE: API_URL_BASE } = import.meta.env;
const { VITE_TMDB_API_TV_POPULAR: API_TV_POPULAR } = import.meta.env;

export const fetchPopularTvSeries = () => {
	/* Envoi d'une requête GET au point de terminaison API_URL_BASE + API_TV_POPULAR avec la clé API_TMDB. */
	axios
		.get(`${API_URL_BASE}${API_TV_POPULAR}`, {
			params: { api_key: API_TMDB },
		})
		.then((res) => {
			console.log(res);
		});
};
