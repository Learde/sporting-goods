<template>
  <div id="app" :class="classes">
    <div class="app__wrapper">
      <div id="nav" class="app__nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    classes() {
      let obj = {
        'app': true,
        'app--smaller': !this.$store.state.isLogin
      }
      return obj
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px; // 1rem = 10px
}

body {
  background-color: rgb(236, 233, 225);
}

.app {
  display: flex;
  max-width: 90rem;
  padding: .8rem;

  margin: 5rem auto 0;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;

  color: #2c3e50;
  background-color: #fff;

  &--smaller {
    max-width: 30rem;
  }

  &__wrapper {
    width: 100%;
    margin: auto auto;
    border: 1px solid #888;
  }

  &__nav {
    display: none;
  }

  & h1 {
    font-size: 2.8rem;
    margin-bottom: 2.5rem;
  }
}
</style>
