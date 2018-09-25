export default {
  addMovies: (state, movies) => {
    state.movies = [
      ...state.movies,
      ...movies,
    ];
  },

  removeMovies(state) {
    state.movies = [];
  },

  setDirectors(state, directors) {
    state.directors = directors;
  },

  incrementPage(state) {
    state.page += 1;
  },

  resetPage(state) {
    state.page = 0;
  },

  setFilters(state, filters) {
    state.filters = filters;
  },

  setLoading(state, loading) {
    state.loading = loading;
  },
};
