<template>
  <div class="page">
    <h1 class="page__heading">Каталог спортивных товаров</h1>
    <Catalog 
      class="page__catalog"
    />
  </div>
</template>

<script>

import Catalog from "@/components/Catalog.vue";

export default {
  name: "Page",
  beforeRouteUpdate (to, from, next) {
    // Если пытаемся перейти на страницу, которой нет, то перенаправляем на последнюю страницу
    if (to.params.page > this.$store.state.possiblePages) {
      next("/page/"+this.$store.state.possiblePages);
    } else if (to.params.page < 1) {
      next("/page/1");
    } else {
      next();
    }
  },
  components: {
    Catalog
  }
};
</script>

<style lang="scss" scoped>
  .page {
    &__heading {
      margin-top: 3rem;
      margin-bottom: 0;
    }
  }
</style>
