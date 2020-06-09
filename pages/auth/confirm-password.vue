<template>
  <section class="recover-password">
    <div class="logo">
      <img src="@/assets/images/logo-onlyfox.svg" alt="Logomarca do projeto zooly" />
    </div>
    <confirm-password />
  </section>
</template>

<script>
import ConfirmPassword from '@/components/confirm-password/confirm-password'
  export default {
    name: 'RecoverPassword',
    layout: 'empty',
    components: { ConfirmPassword },
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