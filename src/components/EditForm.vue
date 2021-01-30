<template>
  <form class="edit-form">
    <label class="edit-form__label" for="name">Название:</label>
    <input class="edit-form__input" id="name" type="text" v-model="newName" v-on:blur="validName">
    <label id="category" class="edit-form__label">Категория:</label>
    <select class="edit-form__input" name="category" id="category" v-model="newCategory">
      <option
        v-for="category in categories"
        :value="category"
        :key="category"
      >{{ category }}</option>
    </select>
    <label class="edit-form__label">Изображения (ссылки):</label>
    <input 
      class="edit-form__input edit-form__image" 
      type="text" v-model="newImages[0]" v-on:blur="validPhoto"
    >
    <input 
      class="edit-form__input edit-form__image" 
      type="text" v-model="newImages[1]" v-on:blur="validPhoto"
    >
    <input 
      class="edit-form__input edit-form__image" 
      type="text" v-model="newImages[2]" v-on:blur="validPhoto"
    >
    <label class="edit-form__label" for="description">Описание:</label>
    <textarea 
      class="edit-form__input" 
      id="description" v-model="newDescription" v-on:blur="validDescription"
    ></textarea>
    <label class="edit-form__label" for="count">Количество:</label>
    <input class="edit-form__input" id="count" type="number" v-model="newCount" v-on:blur="validCount">
    <label class="edit-form__label" for="price">Цена (в рублях):</label>
    <input class="edit-form__input" id="price" type="number" v-model="newPrice" v-on:blur="validPrice">
    <div v-on:click="submitChanges" class="edit-form__button">Принять</div>
  </form>
</template>

<script>
export default {
  props: [
    "name", "activeCategory", "description", "images", "count", "price"
  ],
  data() {
    return {
      errors: {name: false, images: false, count: false, price: false, description: false},
      newName: this.name,
      newImages: this.images,
      newCount: this.count,
      newPrice: this.price,
      newDescription: this.description,
      newCategory: this.activeCategory
    }
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories;
    }
  },
  methods: {
    validName: function() {
      if ( !isNaN( Number( this.newName ) ) ||  this.newName.length < 3) {
        document.getElementById('name').classList.add('edit-form__input--red')
        this.errors.name = true;
      } else {
        document.getElementById('name').classList.remove('edit-form__input--red')
        this.errors.name = false;
      }
    },
    validPhoto: function() {
      const elems = document.getElementsByClassName('edit-form__image');
      if (!this.newImages[0] && !this.images[1] && !this.newImages[2]) {
        for (let i = 0; i < elems.length; i++) {
          elems[i].classList.add('edit-form__input--red');
        }
        this.errors.images = true;
      } else {
        for (let i = 0; i < elems.length; i++) {
          elems[i].classList.remove('edit-form__input--red');
        }
        this.errors.images = false;
      }
    },
    validDescription: function() {
      if (this.newDescription.length > 255) {
        this.errors.description = true;
        document.getElementById('description').classList.add('edit-form__input--red');
      } else {
        this.errors.description = false;
        document.getElementById('description').classList.remove('edit-form__input--red');
      }

      const lt = /</g;
      const gt = />/g; 
      const ap = /'/g;
      const ic = /"/g;
      this.newDescription = this.newDescription.toString().replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
    },
    validCount: function() {
      if (this.newCount < 1) {
        this.errors.count = true
        document.getElementById('count').classList.add('edit-form__input--red');
      } else {
        this.errors.count = false
        document.getElementById('count').classList.remove('edit-form__input--red');
      }
    },
    validPrice: function() {
      if (this.newPrice <= 0) {
        this.errors.price = true
        document.getElementById('price').classList.add('edit-form__input--red');
      } else {
        this.errors.price = false
        document.getElementById('price').classList.remove('edit-form__input--red');
      }
    },
    submitChanges: function() {
      this.validName();
      this.validPhoto();
      this.validDescription();
      this.validCount();
      this.validPrice();

      if (!this.errors.name && 
      !this.errors.description && 
      !this.errors.images && 
      !this.errors.count &&
      !this.errors.price) {
        const obj = {
          id: this.$route.params.id,
          name: this.newName,
          category: this.newCategory,
          price: this.newPrice,
          count: this.newCount,
          images: this.newImages,
          description: this.newDescription
        }

        if (this.$route.name === "Edit") {
          this.$store.dispatch('editFill', obj);
          this.$router.go(-1);
        }
      }
    }
  },
}
</script>

<style lang="scss">
  .edit-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    &__input {
      width: 35rem;
      margin-bottom: 2rem;
      border: 1px solid #888;
      font-size: 1.6rem;
      padding: .8rem 1rem;
    }

    &__input {
      &--red {
        border: 1px solid red;
      }
    }

    &__image {
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }

    &__label {
      font-size: 1.8rem;
      margin-bottom: .8rem;
    }

    &__button {
      display: flex;
      justify-content: center;
      padding: 1rem 1rem;
      font-size: 1.8rem;
      background-color: rgb(238, 224, 202);
      cursor: pointer;
      margin-top: 1.5rem;
    }
  }
</style>