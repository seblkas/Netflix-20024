const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRateMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=235`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=227`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres10749`,
  fetchDocumenteries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShows: `tv/popular?api_key=${API_KEY}&language=en-U
  S&page=1`,
};
export default requests;
