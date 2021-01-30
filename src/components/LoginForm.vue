<template>
  <form class="login-form">
    <input
      class="login-form__input"
      type="text"
      placeholder="Логин"
      v-model="login"
    />
    <input
      class="login-form__input"
      type="password"
      placeholder="Пароль"
      v-model="pass"
    />
    <input
      v-on:click="logIn"
      class="login-form__submit"
      type="submit"
      value="Войти"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      login: null,
      pass: null
    };
  },
  methods: {
    logIn: function() {
      this.$store
        .dispatch("tryLogin", {
          login: this.login,
          pass: this.pass
        })
        .then(() => {
          this.$router.push({ name: "Home" });
        });
    }
  }
};
</script>

<style lang="scss">
.login-form {
  display: flex;
  flex-direction: column;

  &__input {
    margin-bottom: 1rem;
    height: 4.5rem;
    font-size: 1.6rem;
    padding-left: 1.1rem;
  }

  &__submit {
    height: 4.5rem;
    font-size: 1.6rem;
    border: 0;
    background-color: rgb(238, 224, 202);
    margin-top: 1rem;
    cursor: pointer;
  }
}
</style>
