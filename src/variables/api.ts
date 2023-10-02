const API = {
	movie: {
		popular: `${process.env.BASE_URL}popular?api_key=${process.env.API_KEY}`,
		current: `${process.env.BASE_URL}238?api_key=${process.env.API_KEY}&language=ru`,
	},
};

// https://api.themoviedb.org/3/movie/238?api_key=c42a612fa11183223ab9f9e7502f8363&language=ru&movie_id=868759

export { API };
