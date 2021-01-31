<template>
  <article class="catalog-item" v-on:click="openItemPage">
    <div
      class="catalog-item__img"
      :style="'background-image:url(' + img + ');'"
      :alt="name"
    ></div>
    <h6 class="catalog-item__heading catalog-item__item">{{ name }}</h6>
    <p class="catalog-item__category catalog-item__item">{{ category }}</p>
    <p class="catalog-item__price catalog-item__item">{{ price }}р</p>
    <p class="catalog-item__count catalog-item__item">{{ count }}</p>
  </article>
</template>

<script>
export default {
  props: {
    name: {
      default: "",
      type: String
    },
    category: {
      default: "",
      type: String
    },
    img: {
      type: String,
      default: ""
    },
    count: {
      default: 1,
      type: Number
    },
    id: {
      default: 0,
      type: Number
    },
    price: {
      default: 1,
      type: Number
    }
  },
  methods: {
    openItemPage: function() {
      this.$store.commit("writeLastPage", this.$route.params.page);
      // Открываем нужную страницу с товаром
      this.$router.push("/item/" + this.id);
    }
  }
};
</script>

<style lang="scss">
.catalog-item {
  border: 1px solid #ddd;
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: 0px 4px 7px 0px rgba(50, 50, 50, 0.08);
  }

  &__img {
    height: 14rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }

  &__heading {
    font-weight: normal;
  }

  &__item {
    font-size: 1.6rem;
  }
}
</style>
