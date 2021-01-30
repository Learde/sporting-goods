<template>
  <div class="photo-gallery">
    <div
      :style="'background-image:url(' + active + ')'"
      class="photo-gallery__current"
    >
      <div
        v-if="images.indexOf(active) > 0"
        v-on:click="prevPhoto"
        class="photo-gallery__arrow photo-gallery__arrow--left"
      ></div>
      <div
        v-if="images.indexOf(active) < images.length - 1"
        v-on:click="nextPhoto"
        class="photo-gallery__arrow photo-gallery__arrow--right"
      ></div>
    </div>
    <div v-if="images.length > 1" class="photo-gallery__min-images">
      <div
        :class="{
          'photo-gallery__min-image': true,
          'photo-gallery__min-image--active': img == active
        }"
        v-for="img in images"
        :key="images.indexOf(img)"
        v-on:click="changeActive(img)"
        :style="'background-image:url(' + img + ')'"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      default: () => {
        return [];
      },
      type: Array
    },
    name: {
      default: "",
      type: String
    }
  },
  data() {
    return {
      activeImg: null
    };
  },
  computed: {
    active: {
      get: function() {
        if (!this.activeImg) return this.images[0];
        //Изначально присваиваем значения из пропса
        else return this.activeImg; // Затем уже из дата. Причина: иначе случаются некоторые баги
      },
      set: function(url) {
        this.activeImg = url;
      }
    }
  },
  methods: {
    changeActive(img) {
      this.active = img; // Изменяем активную картинку
    },
    nextPhoto() {
      const newIndex = this.images.indexOf(this.active) + 1; // Если индекс следующей активной картинки
      if (newIndex < this.images.length) {
        // существует в массиве, меняем картинку
        this.changeActive(this.images[newIndex]);
      }
    },
    prevPhoto() {
      const newIndex = this.images.indexOf(this.active) - 1; // Если индекс новой активной картинки
      if (newIndex >= 0) {
        // неотрицательный, то меняем картинку
        this.changeActive(this.images[newIndex]);
      }
    }
  }
};
</script>

<style lang="scss">
.photo-gallery {
  &__current {
    margin: 0 auto;
    max-width: 50rem;
    height: 30rem;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    border: 1px solid #888;
    margin-bottom: 0.9rem;
    position: relative;

    &:hover {
      .photo-gallery__arrow {
        opacity: 1;
      }
    }
  }

  &__min-images {
    display: flex;
    justify-content: center;
  }

  &__min-image {
    width: 10rem;
    height: 10rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ddd;

    &:not(:last-child) {
      margin-right: 1rem;
    }

    &--active {
      border: 1px solid rgb(209, 126, 18);
    }
  }

  &__arrow {
    opacity: 0;
    transition: 0.15s;

    &--left::after {
      content: "";
      position: absolute;
      left: 5px;
      top: 50%;
      transform: translateY(-50%);
      border: 18px solid transparent;
      border-right: 18px solid rgb(190, 115, 2);
    }
    &--right::after {
      content: "";
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
      border: 18px solid transparent;
      border-left: 18px solid rgb(190, 115, 2);
    }
  }
}
</style>
