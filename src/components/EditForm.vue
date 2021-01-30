<template>
  <form class="edit-form">
    <label class="edit-form__label" for="name">Название:</label>
    <input
      class="edit-form__input"
      id="name"
      type="text"
      v-model="newName"
      v-on:blur="validName"
    />
    <label class="edit-form__label">Категория:</label>
    <select
      class="edit-form__input"
      name="category"
      id="category"
      v-model="newCategory"
    >
      <option v-for="category in categories" :value="category" :key="category">
        {{ category }}
      </option>
    </select>
    <label class="edit-form__label">Изображения (ссылки):</label>
    <input
      class="edit-form__input edit-form__image"
      type="text"
      v-model="newImages[0]"
      v-on:blur="validPhoto"
    />
    <input
      class="edit-form__input edit-form__image"
      type="text"
      v-model="newImages[1]"
      v-on:blur="validPhoto"
    />
    <input
      class="edit-form__input edit-form__image"
      type="text"
      v-model="newImages[2]"
      v-on:blur="validPhoto"
    />
    <label class="edit-form__label" for="description">Описание:</label>
    <textarea
      class="edit-form__input"
      id="description"
      v-model="newDescription"
      v-on:blur="validDescription"
    ></textarea>
    <label class="edit-form__label" for="count">Количество:</label>
    <input
      class="edit-form__input"
      id="count"
      type="number"
      v-model="newCount"
      v-on:blur="validCount"
    />
    <label class="edit-form__label" for="price">Цена (в рублях):</label>
    <input
      class="edit-form__input"
      id="price"
      type="number"
      v-model="newPrice"
      v-on:blur="validPrice"
    />
    <div v-on:click="submitChanges" class="edit-form__button">Принять</div>
  </form>
</template>

<script>
export default {
  props: {
    name: {
      default: "",
      type: String
    },
    activeCategory: {
      default: "",
      type: String
    },
    description: {
      default: "",
      type: String
    },
    images: {
      type: Array,
      default: () => {
        return ["", "", ""];
      }
    },
    count: {
      default: 1,
      type: Number
    },
    price: {
      default: 1,
      type: Number
    }
  },
  data() {
    return {
      errors: {
        name: false,
        images: false,
        count: false,
        price: false,
        description: false,
        category: false
      },
      newName: this.name,
      newImages: this.images,
      newCount: this.count,
      newPrice: this.price,
      newDescription: this.description,
      newCategory: this.activeCategory
    };
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories;
    }
  },
  methods: {
    validName: function() {
      // var sss
      const names = this.$store.getters.getNames(this.$route.params.id);
      let sameName = false;
      names.forEach(val => {
        // Если такое название продукта уже есть, записываем ошибку
        if (val == this.newName.toUpperCase()) {
          sameName = true;
        }
      });
      // Если название не состоит из чисел, его длина меньше 3 символов или имя уже занято, записываем ошибку
      if (!isNaN(Number(this.newName)) || this.newName.length < 3 || sameName) {
        document.getElementById("name").classList.add("edit-form__input--red");
        this.errors.name = true;
      } else {
        document
          .getElementById("name")
          .classList.remove("edit-form__input--red"); // Убираем стили
        this.errors.name = false; // и убираем ошибку
      }
    },
    validPhoto: function() {
      const elems = document.getElementsByClassName("edit-form__image");
      if (!this.newImages[0] && !this.images[1] && !this.newImages[2]) {
        // Если нет ссылок на изображения
        for (let i = 0; i < elems.length; i++) {
          // то указываем на ошибку
          elems[i].classList.add("edit-form__input--red");
        }
        this.errors.images = true;
      } else {
        for (let i = 0; i < elems.length; i++) {
          elems[i].classList.remove("edit-form__input--red"); // Убираем стили
        }
        this.errors.images = false; // и убираем ошибку
      }

      this.deleteVoid(); // Удаляем пустые строки
    },
    deleteVoid: function() {
      if (!this.newImages[0]) {
        // Так как элемента всего 3, их можно просто перебрать
        this.newImages.splice(0, 1);
      }
      if (!this.newImages[1]) {
        this.newImages.splice(1, 1);
      }
      if (!this.newImages[2]) {
        this.newImages.splice(2, 1);
      }
    },
    validDescription: function() {
      if (this.newDescription.length > 255) {
        document
          .getElementById("description")
          .classList.add("edit-form__input--red"); // Если описание
        this.errors.description = true; // слишком большое, указываем на ошибку
      } else {
        document
          .getElementById("description")
          .classList.remove("edit-form__input--red"); // Убираем стили
        this.errors.description = false; // и убираем ошибку
      }

      const lt = /</g; // Защита от XSS уязвимостей
      const gt = />/g;
      const ap = /"/g;
      const ic = /"/g;
      this.newDescription = this.newDescription
        .toString()
        .replace(lt, "&lt;")
        .replace(gt, "&gt;")
        .replace(ap, "&#39;")
        .replace(ic, "&#34;");
    },
    validCount: function() {
      if (this.newCount < 1) {
        // Если количество меньше 1, то указываем на ошибку
        this.errors.count = true;
        document.getElementById("count").classList.add("edit-form__input--red");
      } else {
        document
          .getElementById("count")
          .classList.remove("edit-form__input--red"); // Убираем стили
        this.errors.count = false; // и убираем ошибку
      }
    },
    validPrice: function() {
      if (this.newPrice <= 0) {
        // Если цена меньше 0, то указываем на ошибку
        this.errors.price = true;
        document.getElementById("price").classList.add("edit-form__input--red");
      } else {
        document
          .getElementById("price")
          .classList.remove("edit-form__input--red"); // Убираем стили
        this.errors.price = false; // и убираем ошибку
      }
    },
    validCategory: function() {
      if (this.newCategory == "") {
        // Если не выбрана категория, то указываем на ошибку
        document
          .getElementById("category")
          .classList.add("edit-form__input--red");
        this.errors.category = true;
      } else {
        document
          .getElementById("category")
          .classList.remove("edit-form__input--red"); // Убираем стили
        this.errors.category = false; // и убираем ошибку
      }
    },
    submitChanges: function() {
      this.validName(); // Хоть методы и используются по событию потери фокуса
      this.validPhoto(); // все равно на всякий случай еще раз проверяем все поля
      this.validDescription();
      this.validCount();
      this.validPrice();
      this.validCategory();

      if (
        !this.errors.name && // Проверяем на наличие хотя бы одной ошибки
        !this.errors.description &&
        !this.errors.images &&
        !this.errors.count &&
        !this.errors.price
      ) {
        const obj = {
          // Если все хорошо, собираем новый объект
          id: this.$route.params.id,
          name: this.newName,
          category: this.newCategory,
          price: this.newPrice,
          count: this.newCount,
          images: this.newImages,
          description: this.newDescription
        };

        if (this.$route.name === "Edit") {
          // В зависимости от страницы или диспатчим редактирвоание продукта
          this.$store.dispatch("editField", obj); // или добавляем новый
        } else if (this.$route.name === "Create") {
          this.$store.dispatch("createField", obj);
        }
        this.$router.go(-1);
      }
    }
  }
};
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
    padding: 0.8rem 1rem;
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
    margin-bottom: 0.8rem;
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
