<template>
  <div class="page">
    <nav class="page__nav">
      <h1 class="page__heading">Каталог спортивных товаров</h1>
      <Button
        v-if="$store.state.isLogin"
        class="page__button"
        nameEvent="open-create"
        v-on:open-create="$router.push('/create')"
        >Создать товар</Button
      >
      <Button
        v-if="!$store.state.isLogin"
        class="page__button"
        nameEvent="open-login"
        v-on:open-login="$router.push('/login')"
        >Войти</Button
      >
    </nav>
    <Catalog class="page__catalog" />
  </div>
</template>

<script>
import Catalog from "@/components/Catalog.vue";
import Button from "@/components/Button.vue";

export default {
  name: "Page",
  beforeRouteUpdate(to, from, next) {
    // Если пытаемся перейти на страницу, которой нет, то перенаправляем на последнюю страницу
    if (to.params.page > this.$store.state.possiblePages) {
      next("/page/" + this.$store.state.possiblePages);
    } else if (to.params.page < 1) {
      next("/page/1");
    } else {
      next();
    }
  },
  components: {
    Catalog,
    Button
  }
};
</script>

<style lang="scss" scoped>
.page {
  margin-top: 3rem;
  &__heading {
    margin-bottom: 0;
  }

  &__nav {
    display: flex;
    padding: 0 3rem;
  }

  &__button {
    margin-left: auto;
  }
}

@media screen and (max-width: 380px) {
  .page {
    &__nav {
      flex-direction: column-reverse;
    }

    &__button {
      width: 14rem;
      margin-bottom: 1rem;
    }
  }
}
</style>
