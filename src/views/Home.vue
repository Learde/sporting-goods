<template>
  <div class="home">
    <h1>Каталог спортивных товаров</h1>
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
