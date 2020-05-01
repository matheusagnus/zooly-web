<template>
  <section class="recover-password">
    <div class="logo">
      <img src="@/assets/images/logo-onlyfox.svg" alt="Logomarca do projeto zooly" />
    </div>
    <recover-form />
  </section>
</template>

<script>
import RecoverForm from '@/components/recover/RecoverForm'
  export default {
    name: 'RecoverPassword',
    layout: 'empty',
    components: { RecoverForm },
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
.recover-password {
  .card {
    width: 80%;
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
    p {
      font-size: 0.85rem;
      text-align: center;
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