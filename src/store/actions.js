import { fetchMovies, fetchDirectors } from '@/services/api';

export default {
  async init({ dispatch }) {
    // TODO: Promise.all
    await dispatch('fetchDirectors');
    await dispatch('fetchMovies');
  },

  async fetchMovies({ commit, state }) {
    commit('setLoading', true);
    commit('incrementPage');

    const movies = await fetchMovies({
      page: state.page,
      limit: state.limit,
      filters: state.filters,
    });

    commit('addMovies', movies);
    commit('setLoading', false);
  },

  async fetchDirectors({ commit }) {
    const directors = await fetchDirectors();

    const serializedDirectors = directors.reduce(
      (res, value) => {
        res.byId[value.id] = value;
        res.ids.push(value.id);

        return res;
      },
      { byId: [], ids: [] },
    );

    commit('setDirectors', serializedDirectors);
  },

  updateFilters({ commit, dispatch }, filters) {
    commit('setFilters', filters);
    commit('removeMovies');
    commit('resetPage');
    dispatch('fetchMovies');
  },
};
