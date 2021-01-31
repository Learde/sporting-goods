<template>
  <div class="pagination">
    <Button v-on:prevPage="prevPage" nameEvent="prevPage" :class="classesPrev"
      >Предыдущая страница</Button
    >
    <Button v-on:nextPage="nextPage" nameEvent="nextPage" :class="classesNext"
      >Следующая страница</Button
    >
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  components: {
    Button
  },
  computed: {
    classesNext() {
      return {
        pagination__button: true, // Кпнока становится серой, если следующей страницы нет
        "pagination__button--disable":
          (Number(this.$store.state.possiblePages) ===
          Number(this.$route.params.page)) || (Number(this.$store.state.possiblePages) === 0)
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
    margin-top: 1rem;

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
