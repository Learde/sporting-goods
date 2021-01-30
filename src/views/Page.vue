<template>
  <div class="page">
    <nav class="page__nav">
      <h1 class="page__heading">Каталог спортивных товаров</h1>
      <div
        v-if="$store.state.isLogin"
        v-on:click="$router.push('/create')"
        class="page__button"
      >
        Создать товар
      </div>
      <div
        v-if="!$store.state.isLogin"
        v-on:click="$router.push('/login')"
        class="page__button"
      >
        Войти
      </div>
    </nav>
    <Catalog class="page__catalog" />
  </div>
</template>

<script>
import Catalog from "@/components/Catalog.vue";

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
    Catalog
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
    display: flex;
    justify-content: center;
    padding: 1rem 1rem;
    font-size: 1.6rem;
    background-color: rgb(238, 224, 202);
    cursor: pointer;
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
