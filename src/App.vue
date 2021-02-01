<template>
  <main id="app" :class="classes">
    <div class="app__wrapper">
      <template v-if="loading">
        <div class="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </template>
      <template v-else>
        <router-view />
      </template>
    </div>
  </main>
</template>

<script>
export default {
  created() {
    // Если есть данные о предыдущих входах, логинимся
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
    // Вводим данные
    this.loading = true;
    this.$store.dispatch("getData").then(() => {
      this.loading = false;
    });
  },
  data() {
    return {
      loading: false
    };
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

.lds-default {
  margin: 30vh 0;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-default div {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgb(199, 119, 0);
  border-radius: 50%;
  animation: lds-default 1.2s linear infinite;
}
.lds-default div:nth-child(1) {
  animation-delay: 0s;
  top: 37px;
  left: 66px;
}
.lds-default div:nth-child(2) {
  animation-delay: -0.1s;
  top: 22px;
  left: 62px;
}
.lds-default div:nth-child(3) {
  animation-delay: -0.2s;
  top: 11px;
  left: 52px;
}
.lds-default div:nth-child(4) {
  animation-delay: -0.3s;
  top: 7px;
  left: 37px;
}
.lds-default div:nth-child(5) {
  animation-delay: -0.4s;
  top: 11px;
  left: 22px;
}
.lds-default div:nth-child(6) {
  animation-delay: -0.5s;
  top: 22px;
  left: 11px;
}
.lds-default div:nth-child(7) {
  animation-delay: -0.6s;
  top: 37px;
  left: 7px;
}
.lds-default div:nth-child(8) {
  animation-delay: -0.7s;
  top: 52px;
  left: 11px;
}
.lds-default div:nth-child(9) {
  animation-delay: -0.8s;
  top: 62px;
  left: 22px;
}
.lds-default div:nth-child(10) {
  animation-delay: -0.9s;
  top: 66px;
  left: 37px;
}
.lds-default div:nth-child(11) {
  animation-delay: -1s;
  top: 62px;
  left: 52px;
}
.lds-default div:nth-child(12) {
  animation-delay: -1.1s;
  top: 52px;
  left: 62px;
}
@keyframes lds-default {
  0%,
  20%,
  80%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
}

@media screen and (max-width: 640px) {
  html {
    font-size: 8px;
  }
}
@media screen and (max-width: 500px) {
  html {
    font-size: 6px;
  }
}
</style>
