<template>
  <div class="create">
    <div v-on:click="$router.go(-1)" class="create__button">← Назад</div>
    <h1 class="create__heading">Создание продукта</h1>
    <EditForm />
  </div>
</template>

<script>
import EditForm from "@/components/EditForm.vue";
export default {
  components: {
    EditForm
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
    display: flex;
    justify-content: center;
    padding: 1rem 1rem;
    font-size: 1.6rem;
    background-color: rgb(238, 224, 202);
    cursor: pointer;
    width: 9.1rem;
    margin: 1rem 0 0 2rem;
  }
}
</style>
