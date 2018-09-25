<template>
  <div class="filter-panel">
    <section class="filter-panel__group">
      <label for="year" class="filter-panel__label">Year</label>
      <input
          id="year"
          name="year"
          type="text"
          class="filter-panel__field"
          :value="filters.year"
          @change="handleChange"
      >
    </section>
    <section class="filter-panel__group">
      <label for="directorId" class="filter-panel__label">Director</label>
      <select
          id="directorId"
          name="directorId"
          class="filter-panel__field"
          :value="filters.directorId"
          @change="handleChange"
      >
        <option value>All</option>
        <option
            v-for="directorId in directors.ids"
            :key="directorId"
            :value="directorId"
        >
          {{directors.byId[directorId].title}}
        </option>
      </select>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    directors: {
      type: Object,
      required: true,
    },
    filters: {
      type: Object,
      required: true,
    },
  },

  methods: {
    handleChange(e) {
      const { name, value } = e.target;

      this.$emit('change', {
        ...this.filters,
        [name]: value.length ? value : undefined,
      });
    },
  },
};
</script>

<style lang="scss">
  .filter-panel {
    &__group {
      display: inline-block;
    }

    &__field {
      width: 150px;
    }
  }
</style>
