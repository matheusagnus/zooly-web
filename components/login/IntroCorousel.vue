<template>
  <section>
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="Logomarca do backoffice zooly" />
    </div>
    <b-carousel :pause-info="false">
      <b-carousel-item v-for="(carousel, i) in 4" :key="i">
        <section class="hero is-medium">
          <div class="hero-body has-text-centered" v-show="i == 0">
            <img src="@/assets/images/preservar.png" alt="">
          </div>
          <div class="hero-body has-text-centered" v-show="i == 1">
            <img src="@/assets/images/educar.png" alt="">
          </div>
          <div class="hero-body has-text-centered" v-show="i == 2">
            <img src="@/assets/images/pesquisar.png" alt="">
          </div>
          <div class="hero-body has-text-centered" v-show="i == 3">
            <img src="@/assets/images/saude.png" alt="">
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
export default {
  name: "IntroCarousel"
};
</script>

<style lang="scss" scoped>
.carousel {
  height: 80%;
  /deep/.carousel-items {
    padding: 1rem 0;
    margin: 0 auto;
    width: 80%;
  }
  /deep/.carousel-indicator.is-inside.is-bottom {
    bottom: 1rem;
  }
}

  .hero.is-medium .hero-body {
      padding: 0;
  }


.logo {
  width: 15rem;
  margin: 0 auto;
  img {
    margin-top: 2.5rem;
  }
}
</style>