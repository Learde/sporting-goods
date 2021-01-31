<template>
  <div class="edit">
    <Button class="edit__button" nameEvent="back" v-on:back="$router.go(-1)"
      >← Назад</Button
    >
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
import EditForm from "@/components/EditForm.vue";
import Button from "@/components/Button.vue";
export default {
  components: {
    EditForm,
    Button
  },
  computed: {
    data() {
      return this.$store.getters.getItemById(this.$route.params.id);
    }
  }
};
</script>

<style lang="scss">
.edit {
  &__heading {
    margin-top: 1rem;
    margin-bottom: 0 !important;
  }

  &__button {
    width: 8.63rem;
    margin: 1rem 0 0 2rem;
  }
}

@media screen and (max-width: 400px) {
  .edit__button {
    width: 9.1rem;
  }
}
</style>
