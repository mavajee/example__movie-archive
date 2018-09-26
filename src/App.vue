<template>
  <main>
    <MovieFilterPanel
      :directors="directors"
      :filters="filters"
      @change="updateFilters"
    />

    <MovieList
      :movies="movies"
      :directors="directors"
      :isLoading="loading"
      @loadMore="fetchMovies"
    />

    <InfiniteLoading
      v-if="movies.length"
      spinner="waveDots"
      @infinite="handleLoadMore"
    >
      <span slot="no-results"></span>
      <span slot="no-more"></span>
    </InfiniteLoading>
  </main>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import { mapActions, mapState, mapGetters } from 'vuex';

import MovieFilterPanel from '@/components/MovieFilterPanel.vue';
import MovieList from '@/components/MovieList.vue';

export default {
  components: {
    MovieFilterPanel,
    MovieList,
    InfiniteLoading,
  },

  computed: {
    ...mapState(['loading', 'movies', 'directors', 'filters']),
    ...mapGetters(['end']),
  },

  methods: {
    ...mapActions(['init', 'fetchMovies', 'updateFilters']),

    async handleLoadMore(loader) {
      await this.fetchMovies();

      if (this.end) {
        loader.complete();
      } else {
        loader.loaded();
      }
    },
  },

  created() {
    this.init();
  },
};
</script>
