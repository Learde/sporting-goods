<template>
  <div class="pagination">
    <div v-on:click="prevPage" :class="classesPrev">Предыдущая страница</div>
    <div v-on:click="nextPage" :class="classesNext">Следующая страница</div>
  </div>
</template>

<script>
export default {
  computed: {
    classesNext() {
      return {
        pagination__button: true, // Кпнока становится серой, если следующей страницы нет
        "pagination__button--disable":
          Number(this.$store.state.possiblePages) ===
          Number(this.$route.params.page)
      };
    },
    classesPrev() {
      return {
        pagination__button: true, // Кпнока становится серой, если предыдущей страницы нет
        "pagination__button--disable": 1 === Number(this.$route.params.page)
      };
    }
  },
  methods: {
    nextPage: function() {
      if (this.$route.params.page < this.$store.state.possiblePages) {
        this.$router.push({
          path: "/page/" + (Number(this.$route.params.page) + 1)
        });
      }
    },
    prevPage: function() {
      if (this.$route.params.page > 1) {
        this.$router.push({
          path: "/page/" + (Number(this.$route.params.page) - 1)
        });
      }
    }
  }
};
</script>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: space-between;

  &__button {
    padding: 1.25rem 0.8rem;
    font-size: 1.6rem;
    background-color: rgb(238, 224, 202);
    margin-top: 1rem;
    cursor: pointer;

    &--disable {
      cursor: default;
      background-color: rgb(189, 182, 163);
    }

    // &:not(:last-child) {
    //   margin-right: 1.2rem;
    // }
  }
}
</style>
