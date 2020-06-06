<template>
  <section class="login-form">
    <div class="logo">
      <img src="@/assets/images/logo-onlyfox.svg" alt="Logomarca do projeto zooly" />
    </div>
    <div class="card">
      <div class="title">
        <h2>Login</h2>
      </div>
      <form class="form">
        <b-field
          label="E-mail"
          :type="{ 'is-danger': hasError }"
          :message="{ 'Talvez seu e-mail esteja errado, tente novamente': hasError }"
        >
          <b-input v-model="email" icon="account" placeholder="Seu e-mail..." />
        </b-field>

        <b-field
          label="Senha"
          :type="{ 'is-danger': hasError }"
          :message="[
            { 'Você tem certeza que essa é a senha certa?': hasError }
          ]"
          >
          <b-input v-model="password" icon="lock-question" type="password" placeholder="Sua senha..." />
        </b-field>

        <b-button class="btn-primary" @click="login()">Acessar</b-button>
      <p>Esqueceu sua senha? <nuxt-link to="/auth/recover">Recupere a sua senha</nuxt-link></p>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      email: null,
      password: null,
      hasError: false
    }
  },
  methods: {
    login () {
      if (this.email && this.password) {
        this.$store.dispatch('auth/doLogin', {
          email: this.email,
          password: this.password
        })
      } else {
        this.hasError = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  .card {
    width: 80%;
    margin: 1rem auto;
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: #fafafa;
    .title {
      text-align: center;
      h2 {
        font-size: 1.5rem;
        font-weight: 700;
      }
    }
    p {
      font-size: 0.85rem;
      text-align: center;
    }
  }
  .form {
    margin-bottom: 1rem;
    /deep/.field .label {
      font-size: 0.85rem;
      margin-bottom: 0.25em;
    }
    .btn-primary {
      margin-top: 1rem;
      height: 2.5rem;
      width: 100%;
      font-weight: 700;
      color: #fafafa;
      background: linear-gradient(to right, rgba(255,114,95,1) 30%, rgba(242,49,165,1) 100%);
    }
  }
  .logo {
    width: 5rem;
    margin: 0 auto;
    img {
      margin-top: 2.5rem;
    }
  }
}
</style>