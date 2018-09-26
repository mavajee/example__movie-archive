import { fetchMovies, fetchDirectors } from '@/services/api';
import serialize from '@/services/serialize';

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
    const a = serialize(directors);
    console.log(a)
    debugger
    commit('setDirectors', serialize(directors));
  },

  updateFilters({ commit, dispatch }, filters) {
    commit('setFilters', filters);
    commit('removeMovies');
    commit('resetPage');
    dispatch('fetchMovies');
  },
};
