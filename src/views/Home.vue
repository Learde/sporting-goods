<template>
  <div class="home">
    <h1 class="home__heading">Каталог спортивных товаров</h1>
    <Catalog class="home__catalog" />
  </div>
</template>

<script>

import Catalog from "@/components/Catalog.vue";

export default {
  name: "Home",
  components: {
    Catalog
  }
};
</script>

<style lang="scss" scoped>
  .home {
    &__heading {
      margin-top: 3rem;
      margin-bottom: 0;
    }
  }
</style>
