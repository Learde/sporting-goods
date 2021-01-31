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
      v-if="!isNewCategory"
      class="edit-form__input edit-form__category"
      name="category"
      id="category"
      v-model="newCategory"
    >
      <option v-for="category in categories" :value="category" :key="category">
        {{ category }}
      </option>
    </select>
    <input
      v-else
      id="customCategory"
      class="edit-form__input edit-form__category"
      type="text"
      v-model="newCustomCategory"
      v-on:blur="validCategory"
    />
    <Button class="edit-form__button-toggle" nameEvent="toggle-mode" v-on:toggle-mode="toggleCategoryMode">
      <template v-if="isNewCategory">Выбрать из списка</template>
      <template v-else>Новая категория</template>
    </Button>
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
      class="edit-form__input edit-form__image edit-form__image--last"
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
    <Button
      class="edit-form__button"
      nameEvent="create-submit"
      v-on:create-submit="submitChanges"
      >Принять</Button
    >
  </form>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  components: {
    Button
  },
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
        category: false,
        customCategory: false
      },
      newName: this.name,
      newImages: this.images,
      newCount: this.count,
      newPrice: this.price,
      newDescription: this.description,
      newCategory: this.activeCategory,
      isNewCategory: false,
      newCustomCategory: ''
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

      this.newName = this.preventXSS(this.newName);
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

      this.newImages[0] = this.preventXSS(this.newImages[0]);
      this.newImages[1] = this.preventXSS(this.newImages[1]);
      this.newImages[2] = this.preventXSS(this.newImages[2]);

      this.deleteVoid(); // Удаляем пустые строки
    },
    deleteVoid: function() {
      if (!this.newImages[2]) {
        // Так как элемента всего 3, их можно просто перебрать
        this.newImages.splice(2, 1);
      }
      if (!this.newImages[1]) {
        this.newImages.splice(1, 1);
      }
      if (!this.newImages[0]) {
        this.newImages.splice(0, 1);
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

      this.newDescription = this.preventXSS(this.newDescription);
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
      if (!this.isNewCategory) {
        this.errors.customCategory = false;
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

        this.newCategory = this.preventXSS(this.newCategory);
      } else {
        this.errors.category = false;
        if (this.newCustomCategory == "") {
          // Если не выбрана категория, то указываем на ошибку
          document
            .getElementById("customCategory")
            .classList.add("edit-form__input--red");
          this.errors.customCategory = true;
        } else {
          document
            .getElementById("customCategory")
            .classList.remove("edit-form__input--red"); // Убираем стили
          this.errors.customCategory = false; // и убираем ошибку
        }

        this.newCategory = this.preventXSS(this.newCategory);
      }
    },
    preventXSS: function(str) {
      if (!str) return;

      const lt = /</g; // Защита от XSS уязвимостей
      const gt = />/g;
      const ap = /"/g;
      const ic = /"/g;
      return str
        .toString()
        .replace(lt, "&lt;")
        .replace(gt, "&gt;")
        .replace(ap, "&#39;")
        .replace(ic, "&#34;");
    },
    toggleCategoryMode: function() {
      this.isNewCategory = !this.isNewCategory;
    },
    submitChanges: function() {
      this.validName(); // Хоть методы и используются по событию потери фокуса
      this.validPhoto(); // все равно на всякий случай еще раз проверяем все поля
      this.validDescription();
      this.validCount();
      this.validPrice();
      this.validCategory();

      // переменная-булеан для сохранения результата проверок на ошибки
      let validCategory = false;

      // В зависимости от выбранного режима категорий, проверяем на наличие ошибок
      if (this.isNewCategory && !this.errors.customCategory) validCategory = true;
      else if (!this.isNewCategory && !this.errors.category) validCategory = true;
      if (
        !this.errors.name && // Проверяем на наличие хотя бы одной ошибки
        !this.errors.description &&
        !this.errors.images &&
        !this.errors.count &&
        !this.errors.price &&
        validCategory
      ) {
        let category;
        if (this.isNewCategory) category = this.newCustomCategory;
        else category = this.newCategory;
        const obj = {
          // Если все хорошо, собираем новый объект
          id: this.$route.params.id,
          name: this.newName,
          category: category,
          price: this.newPrice,
          count: this.newCount,
          images: this.newImages,
          description: this.newDescription
        };

        if (this.$route.name === "Edit") {
          // В зависимости от страницы или диспатчим редактирвоание продукта
          this.$store.dispatch("editField", obj); // или добавляем новый
          this.$router.go(-1);
        } else if (this.$route.name === "Create") {
          this.$store.dispatch("createField", obj);
          this.$router.push("/page/" + this.$store.state.possiblePages);
        }
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

    &--red {
      border: 1px solid red;
    }
  }

  &__category {
    height: 3.67rem;
    margin-bottom: 0.8rem;

    & option {
      text-transform: capitalize;
    }
  }

  &__image {
    margin-bottom: 1rem;

    &--last {
      margin-bottom: 2rem;
    }
  }

  &__label {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }

  &__button {
    font-size: 1.8rem;
    margin-top: 1.5rem;
  }

  &__button-toggle {
    width: 35rem;
    margin-top: 0;
    margin-bottom: 2rem;
  }
}
</style>
