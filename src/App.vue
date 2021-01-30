<template>
  <main id="app" :class="classes">
    <div class="app__wrapper">
      <div id="nav" class="app__nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </div>
  </main>
</template>

<script>
export default {
  beforeCreate() {
    if (window.localStorage.login && window.localStorage.pass) {
      this.$store
        .dispatch("tryLogin", {
          login: window.localStorage.login,
          pass: window.localStorage.pass
        })
        .then(() => {
          if (this.$store.state.isLoginPage)
            this.$router.push({ name: "Home" });
        });
    }

    this.$store.dispatch("getData");
  },
  computed: {
    classes() {
      return {
        app: true,
        "app--smaller": this.$route.name === "Login"
      };
    }
  }
};
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
  background: rgb(236, 233, 225);
}

.app {
  display: flex;
  max-width: 90rem;
  padding: 0.8rem;
  margin: 5rem auto 5rem;
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
