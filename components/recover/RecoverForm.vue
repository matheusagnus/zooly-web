<template>
  <div class="recover-form">
    <div class="card">
      <div class="title">
        <h2>Recuperar de senha</h2>
      </div>
      <div class="subtitle">
        <p>Enviaremos um e-mail para confirmar o seu e-mail e recuperar a sua senha</p>
      </div>
      <div class="form">
        <b-field
          label="E-mail"
          :type="{ 'is-danger': hasError }"
          :message="{ 'Precisamos do seu e-mail para conseguir recuperar sua senha': hasError }"
        >
          <b-input v-model="email" icon="account" placeholder="Seu e-mail..."></b-input>
        </b-field>

        <b-button @click="recover()" class="btn-primary">Enviar e-mail</b-button>
      </div>
      <p>Voltar para o <nuxt-link to="/auth/login">Login</nuxt-link></p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hasError: false,
        email: null
      }
    },
    methods: {
      recover () {
        if (this.email) {
          this.$store.dispatch('auth/recoverPassword', this.email)
          this.hasError = false
        } else {
          this.hasError = true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.recover-form {
  .card {
    width: 40%;
    margin: 1rem auto;
    padding: 1.5rem;
    border-radius: 1rem;
    .title {
      text-align: center;
      h2 {
        font-size: 1.5rem;
        font-weight: 700;
      }
    }
    .subtitle {
      font-size: 0.85rem;
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
}

@media (max-width: 64rem) {
  .recover-form .card {
    width: 80%;
  }
}
</style>