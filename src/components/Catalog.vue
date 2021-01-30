<template>
  <div class="Catalog">
    <div class="Catalog__table-header">
      <p class="Catalog__table-item">Изображение</p>
      <p class="Catalog__table-item">Название</p>
      <p class="Catalog__table-item">Категория</p>
      <p class="Catalog__table-item">Цена</p>
      <p class="Catalog__table-item">Количество</p>
    </div>
    <CatalogItem
      class="Catalog__catalog-item"
      v-for="item in data"
      :key="item.id"
      :name="item.name"
      :category="item.category"
      :price="item.price"
      :count="item.count"
      :img="item.images[0]"
      :id="item.id"
    />
    <Pagination />
  </div>
</template>

<script>
import CatalogItem from "@/components/CatalogItem.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  components: {
    CatalogItem,
    Pagination
  },
  computed: {
    data() {
      return this.$store.getters.getDataByPage(this.$route.params.page);
    }
  }
};
</script>

<style lang="scss">
.Catalog {
  padding: 3rem;
  &__table-header,
  &__catalog-item {
    display: grid;
    grid-template-columns: 18rem 2fr 1fr 1fr 1fr;
    padding: 2rem;
    align-items: center;
  }

  &__catalog-item:not(:last-child) {
    margin-bottom: 2rem;
  }

  &__table-header {
    margin-bottom: 0.8rem;
  }

  &__table-item {
    font-size: 1.8rem;
  }
}
</style>
