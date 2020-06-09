<template>
  <div class="recover-form">
    <div class="card">
      <div class="title">
        <h2>Criar nova senha</h2>
      </div>
      <div class="subtitle">
        <p>A sua senha será definida para todos os acessos, por favor, informe-a no campo a baixo:</p>
      </div>
      <div class="form">
        <b-field
          label="Senha"
          :type="{ 'is-danger': hasError }"
          :message="{ 'Precisamos do seu e-mail para o login': hasError }"
        >
          <b-input placeholder="Digite aqui..." v-model="password" password-reveal />
        </b-field>

        <b-button class="btn-primary">Salvar nova senha</b-button>
      </div>
      <p>Voltar para o <nuxt-link to="/auth/login">Login</nuxt-link></p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hasError: false
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