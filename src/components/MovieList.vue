<template>
  <div>
    <table
        v-if="movies.length"
        class="movie-list"
        :class="{'movie-list--loading': isLoading}"
    >
      <thead>
        <tr>
          <th>Title</th>
          <th>Director</th>
          <th>Year</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="movie in movies" :key="movie.id">
          <td>{{movie.title}}</td>
          <td>{{directors.byId[movie.directorId].title}}</td>
          <td>{{movie.year}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: Boolean,
    movies: {
      type: Array,
      required: true,
    },
    directors: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.movie-list {
  &--loading {
    opacity: 0.5;
  }
}
</style>
