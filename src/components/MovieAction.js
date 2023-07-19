const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDBmNDE5Nzg2ODdlYjRkNDA4MTRjZWQ5NmMxNGY3MiIsInN1YiI6IjY0NjVkMWI1ZDE4NTcyMDE0MDJmNmI4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UWuHQwXdC-wJxn69D49_xz7tgNxq8pC9aKv1IK0FmF0'
    }
};

const fetchCast = async (movieId) => {
    const url = "https://api.themoviedb.org/3/movie/" + movieId + "/credits?language=en-US"
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }

    const responseData = await response.json();
    const cast = responseData.cast.filter(c => c.known_for_department === "Acting").slice(0, 5)
    return cast;

}


const fetchSimilarMovies = async (movieId) => {
    let moviesFecthed = [];
    const url = "https://api.themoviedb.org/3/movie/" + movieId + "/similar?language=en-US&page=1";
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }

    const responseData = await response.json();

    for (const index in responseData.results) {
        const movie = responseData.results[index];
        moviesFecthed.push({
            id: movie.id,
            title: movie.title,
            backdropImagePath: movie.backdrop_path,
            description: movie.overview,
            popularity: movie.popularity,
            releaseDate: movie.release_date,
            genreIds: movie.genre_ids,
            poster: movie.poster_path,
            voteAverage: movie.vote_average,
            voteCount: movie.vote_count,
            posterPath: movie.poster_path
        });

    }
    return moviesFecthed.slice(0, 4);
}

const fetchMovieTrailerId = async (movieId) => {
    const url = 'https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US';
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }

    const responseData = await response.json();
    console.log(responseData.results)
    return responseData.results[0].key;

}
export const fetchMovieDetail = async (movieId) => {
    const url = 'https://api.themoviedb.org/3/movie/' + movieId + '?language=en-US'

    const response = await fetch(url, options);
    const cast = await fetchCast(movieId);
    const trailerVideoId = await fetchMovieTrailerId(movieId)
    const Similars = await fetchSimilarMovies(movieId);
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }
    const responseData = await response.json();

    console.log(cast)
    console.log(Similars)

    console.log(trailerVideoId)
    return {
        movieFecthed: responseData,
        cast: cast,
        similars: Similars,
        trailerVideoId:trailerVideoId,
    }

}

export const fetchMoviesAction = async (type, page) => {
    const url = 'https://api.themoviedb.org/3/movie/' + type + '?language=en-US&page=' + page;
    let moviesFecthed = [];
    let totalPage;

    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }

    const responseData = await response.json();
    totalPage = responseData.total_pages > 500 ? 500 : totalPage = responseData.total_pages

    for (const index in responseData.results) {
        const movie = responseData.results[index];
        moviesFecthed.push({
            id: movie.id,
            title: movie.title,
            backdropImagePath: movie.backdrop_path,
            description: movie.overview,
            popularity: movie.popularity,
            releaseDate: movie.release_date,
            genreIds: movie.genre_ids,
            poster: movie.poster_path,
            voteAverage: movie.vote_average,
            voteCount: movie.vote_count,
            posterPath: movie.poster_path
        });

    }
    return { moviesFecthed, totalPage };
};

export const fetchMoviesSearch = async (searchString, page) => {
    const url = 'https://api.themoviedb.org/3/search/movie?query=' + searchString + '&include_adult=false&language=en-US&page=' + page;
    let moviesFecthed = [];
    let totalPage;

    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }

    const responseData = await response.json();
    totalPage = responseData.total_pages > 500 ? 500 : totalPage = responseData.total_pages

    for (const index in responseData.results) {
        const movie = responseData.results[index];
        moviesFecthed.push({
            id: movie.id,
            title: movie.title,
            backdropImagePath: movie.backdrop_path,
            description: movie.overview,
            popularity: movie.popularity,
            releaseDate: movie.release_date,
            genreIds: movie.genre_ids,
            poster: movie.poster_path,
            voteAverage: movie.vote_average,
            voteCount: movie.vote_count,
            posterPath: movie.poster_path
        });

    }
    return { moviesFecthed, totalPage };
};