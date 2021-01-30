<template>
  <div class="item">
    <nav class="item__nav">
      <div v-on:click="goBack" class="item__back">← Назад</div>
      <div v-on:click="$router.push('/item/' + data.id + '/edit')" class="item__edit">Редактировать</div>
      <div v-on:click="showPopup" class="item__delete">Удалить</div>
    </nav>
    <h1 class="item__heading">{{ data.name }}</h1>
    <h2 class="item__category">Категория: {{ data.category }}</h2>
    <PhotoGallery
      :name="data.name"
      :images="data.images"
    />
    <h2 class="item__subheading">Описание</h2>
    <p class="item__text">{{ data.description }}</p>
    <h2 class="item__subheading">Количество: {{ data.count }}</h2>
    <h2 class="item__subheading">Цена: {{ data.price }}</h2>

    <Popup v-on:unshow="unshowPopup" :isVisible="isPopupVisible"/>
  </div>
</template>

<script>
import PhotoGallery from '@/components/PhotoGallery.vue';
import Popup from '@/components/Popup.vue';
export default {
  components: {
    PhotoGallery, Popup
  },
  computed: {
    data() {
      return this.$store.getters.getItemById(this.$route.params.id)
    }
  },
  data() {
    return {
      isPopupVisible: false
    }
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    },
    showPopup: function() {
      this.isPopupVisible = true
    },
    unshowPopup: function() {
      this.isPopupVisible = false
    }
  },
}
</script>

<style lang="scss">
  .item {
    padding: 1rem 2rem 3rem;

    & &__heading {
      margin-bottom: 1rem;
    }

    &__category {
      font-size: 2rem;
      font-weight: normal;
      margin-bottom: 2.5rem;
    }

    &__subheading {
      margin-top: 2.5rem;
      margin-bottom: .3rem;
      font-size: 2rem;
      font-weight: 700;
    }

    &__text {
      font-size: 1.6rem;
    }

    &__nav {
      display: flex;
    }

    &__back, &__delete, &__edit {
      display: flex;
      justify-content: center;
      padding: 1rem 1rem;
      font-size: 1.6rem;
      background-color: rgb(238, 224, 202);
      cursor: pointer;
    }

    &__delete {
      margin-left: 1.5rem;
    }

    &__edit {
      margin-left: auto;
    }
  }
</style>