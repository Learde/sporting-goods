<template>
  <div class="create">
    <Button class="create__button" nameEvent="back" v-on:back="$router.go(-1)"
      >← Назад</Button
    >
    <h1 class="create__heading">Создание продукта</h1>
    <EditForm />
  </div>
</template>

<script>
import EditForm from "@/components/EditForm.vue";
import Button from "@/components/Button.vue";
export default {
  components: {
    EditForm,
    Button
  }
};
</script>

<style lang="scss">
.create {
  &__heading {
    margin-top: 1rem;
    margin-bottom: 1rem !important;
  }

  &__button {
    width: 9.1rem;
    margin: 1rem 0 0 2rem;
  }
}
</style>
