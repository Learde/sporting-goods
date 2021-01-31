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
    <Button v-on:login="logIn" nameEvent="login">Войти</Button>
  </form>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  components: {
    Button
  },
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
    margin-top: 1rem;
  }
}
</style>
