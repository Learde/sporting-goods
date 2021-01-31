<template>
  <div :class="classes">
    <div class="popup__wrapper">
      <h2 class="popup__heading">
        Вы уверены? Действие <span class="popup__red-text">нельзя</span> будет
        отменить
      </h2>
      <Button
        v-on:toggle-event="$emit('toggle-event')"
        nameEvent="toggle-event"
        class="popup__button"
        >Удалить</Button
      >
      <Button
        v-on:unshow="$emit('unshow')"
        nameEvent="unshow"
        class="popup__button"
        >Отмена</Button
      >
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  components: {
    Button
  },
  props: {
    isVisible: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    classes() {
      return {
        popup: true,
        "popup--visible": this.isVisible
      };
    }
  },
  methods: {
    cl: function() {
      console.log(123);
    }
  }
};
</script>

<style lang="scss">
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: rgba(100, 100, 100, 0.5);
  display: none;

  &--visible {
    display: block;
  }

  &__wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 28rem;
    background-color: #fff;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  &__heading {
    width: 100%;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }

  &__button {
    width: 10rem;
  }

  &__red-text {
    color: red !important;
  }
}
</style>
