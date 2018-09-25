import Vue from 'vue';
import Vuex from 'vuex';

import { ITEMS_PER_PAGE } from '@/constants';

import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  mutations,

  state: {
    movies: [],
    directors: {
      byId: {},
      ids: [],
    },
    page: 0,
    limit: ITEMS_PER_PAGE,
    sort: undefined,
    order: undefined,
    filters: {},
    loading: false,
  },

  getters: {
    end(state) {
      return ITEMS_PER_PAGE * state.page > state.movies.length;
    },
  },
});
