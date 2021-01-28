<template>
  <div class="Catalog">
    <CatalogItem
      v-for="item in data"
      :key="item.id"
      :name="item.name"
      :category="item.category"
      :price="item.price"
      :count="item.count"
      :img="item.images[0]"
    />
  </div>
</template>

<script>
import CatalogItem from "@/components/CatalogItem.vue";
export default {
  components: {
    CatalogItem
  },
  computed: {
    data() {
      return this.$store.state.data;
    }
  }
}
</script>

<style lang="scss">

</style>