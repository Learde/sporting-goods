<template>
  <div class="item">
    <nav class="item__nav">
      <Button nameEvent="back" v-on:back="goBack" class="item__back"
        >← Назад</Button
      >
      <Button
        v-if="$store.state.isLogin"
        nameEvent="open-edit"
        v-on:open-edit="$router.push('/item/' + data.id + '/edit')"
        class="item__edit"
        >Редактировать</Button
      >
      <Button
        v-if="$store.state.isLogin"
        nameEvent="open-prompt"
        v-on:open-prompt="showPopup"
        class="item__delete"
        >Удалить</Button
      >
    </nav>
    <h1 class="item__heading">{{ data.name }}</h1>
    <h2 class="item__category">Категория: {{ data.category }}</h2>
    <PhotoGallery :name="data.name" :images="data.images" />
    <h2 class="item__subheading">Описание</h2>
    <div class="item__descriptions">
      <p v-for="val in data.description" :key="val.id" class="item__text">
        {{ val.text }}
      </p>
    </div>
    <h2 class="item__subheading">Количество: {{ data.count }}</h2>
    <h2 class="item__subheading">Цена: {{ data.price }}</h2>

    <Popup
      v-on:toggle-event="deleteItem"
      v-on:unshow="unshowPopup"
      :isVisible="isPopupVisible"
    />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import PhotoGallery from "@/components/PhotoGallery.vue";
import Popup from "@/components/Popup.vue";
export default {
  components: {
    PhotoGallery,
    Popup,
    Button
  },
  computed: {
    data() {
      return this.$store.getters.getItemById(this.$route.params.id);
    }
  },
  data() {
    return {
      isPopupVisible: false
    };
  },
  methods: {
    goBack: function() {
      this.$router.go(-1); // Возращаемся на один переход назад
    },
    showPopup: function() {
      this.isPopupVisible = true; // Показываем popup
    },
    unshowPopup: function() {
      this.isPopupVisible = false; // Скрываем popup
    },
    deleteItem: function() {
      this.$store
        .dispatch("deleteItem", this.$route.params.id) // Диспатчим событие для удаления элемента
        .then(() => {
          this.$emit("unshow");
          // Если на странице с удаленным товаром больше ничего нет, возращаемся на последнюю страницу с товарами
          if (this.$store.state.lastPage > this.$store.state.possiblePages) {
            let redirectPage = this.$store.state.possiblePages;
            if (redirectPage == 0) redirectPage += 1;
            this.$router.push("/page/" + redirectPage); // Возращаемся на последнюю страницу с товарами
          } else {
            this.$router.push("/page/" + this.$store.state.lastPage); // Возращаемся на страницу с товарами
          }
        });
    }
  }
};
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
    text-transform: capitalize;
  }

  &__subheading {
    margin-top: 2.5rem;
    margin-bottom: 0.3rem;
    font-size: 2rem;
    font-weight: 700;
  }

  &__text {
    font-size: 1.6rem;
  }

  &__nav {
    display: flex;
  }

  &__delete {
    margin-left: 1.5rem;
  }

  &__edit {
    margin-left: auto;
  }

  &__descriptions {
    & p:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }
}
</style>
