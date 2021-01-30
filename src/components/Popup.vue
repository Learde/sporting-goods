<template>
  <div :class="classes">
    <div class="popup__wrapper">
      <h2 class="popup__heading">
        Вы уверены? Действие <span class="popup__red-text">нельзя</span> будет
        отменить
      </h2>
      <div v-on:click="$emit('toggleEvent')" class="popup__button">Удалить</div>
      <div v-on:click="$emit('unshow')" class="popup__button">Отмена</div>
    </div>
  </div>
</template>

<script>
export default {
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
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    width: 10rem;
    font-size: 1.6rem;
    background-color: rgb(238, 224, 202);
    cursor: pointer;
  }

  &__red-text {
    color: red !important;
  }
}
</style>
