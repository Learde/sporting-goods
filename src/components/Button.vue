<template>
  <div v-on:click="$emit(nameEvent)" class="button">
    <slot>Кнопка</slot>
  </div>
</template>

<script>
export default {
  props: {
    nameEvent: {
      type: String,
      default: "event"
    }
  }
};
</script>

<style lang="scss">
.button {
  display: flex;
  justify-content: center;
  padding: 1rem 1rem;
  font-size: 1.6rem;
  background-color: rgb(238, 224, 202);
  cursor: pointer;
  border: 0;
  outline: 0;
}
</style>
