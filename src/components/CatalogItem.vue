<template>
  <div class="catalog-item">
    <img :src="img" :alt="name">
    <h6>{{ name }}</h6>
    <p>{{ category }}</p>
    <p>{{ price }}</p>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  props: ['name', 'category', 'price', 'count', 'img']
}
</script>

<style lang="scss">

</style>