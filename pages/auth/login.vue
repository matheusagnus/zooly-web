<template>
  <section class="login">
    <div class="columns">
      <div class="column intro is-7 view-desktop">
        <intro-carousel />
      </div>
      <div class="column login-component">
        <login-form />
      </div>
    </div>
  </section>
</template>

<script>
import IntroCarousel from '@/components/login/IntroCorousel'
import LoginForm from '@/components/login/LoginForm'

  export default {
    name: 'Login',
    layout: 'empty',
    components: { IntroCarousel, LoginForm }
  }
</script>

<style lang="scss" scoped>
.login {
  .intro {
    height: 104vh;
    background-color: #FAFAFA;
    border-bottom-right-radius: 3rem;
    border-top-right-radius: 3rem;
  }
}
</style>