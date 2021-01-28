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

    // Сколько всего страниц с товарами
    let possiblePages = Math.ceil(this.$store.state.data.length / 10);
    // Если пытаемся перейти на страницу, которой нет, то перенаправляем на последнюю страницу
    if (to.params.page > possiblePages) {
      next("/page/"+possiblePages);
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
