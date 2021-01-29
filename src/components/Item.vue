<template>
  <div class="item">
    <h1 class="iten__heading">{{ data.name }}</h1>
    <PhotoGallery
      :name="data.name"
      :images="data.images"
    />
  </div>
</template>

<script>
import PhotoGallery from '@/components/PhotoGallery.vue';
export default {
  components: {
    PhotoGallery
  },
  computed: {
    data() {
      return this.$store.getters.getItemById(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss">
  .item {
    margin-top: 3rem;
  }
</style>