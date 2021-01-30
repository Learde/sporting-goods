<template>
  <div class="login">
    <h1 class="login__heading">Авторизация</h1>
    <LoginForm class="login__form" />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "Login",
  components: {
    LoginForm
  }
};
</script>

<style lang="scss">
.login {
  padding: 2.5rem 2rem;
}
</style>
