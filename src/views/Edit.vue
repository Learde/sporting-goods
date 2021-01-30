<template>
  <div class="edit">
    <div v-on:click="$router.go(-1)" class="edit__button">← Назад</div>
    <h1 class="edit__heading">Редактирование</h1>
    <EditForm
      :name="data.name"
      :activeCategory="data.category"
      :images="data.images"
      :description="data.description"
      :price="data.price"
      :count="data.count"
    />
  </div>
</template>

<script>
import EditForm from '@/components/EditForm.vue'
export default {
  components: {
    EditForm
  },
  computed: {
    data() {
      return this.$store.getters.getItemById(this.$route.params.id);
    }
  }
}
</script>

<style lang="scss">
  .edit {
    &__heading {
      margin-top: 1rem;
      margin-bottom: 0 !important;
    }

    &__button {
      display: flex;
      justify-content: center;
      padding: 1rem 1rem;
      font-size: 1.6rem;
      background-color: rgb(238, 224, 202);
      cursor: pointer;
      width: 8.63rem;
      margin: 1rem 0 0 2rem;
    }
  }
</style>