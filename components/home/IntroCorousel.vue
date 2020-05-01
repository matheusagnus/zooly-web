<template>
  <section>
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="Logomarca do projeto zooly" />
    </div>
    <b-carousel :pause-info="false">
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section :class="`hero is-medium is-${carousel.color}`">
          <div class="hero-body has-text-centered">
            <h1 class="title">{{carousel.text}}</h1>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
export default {
  name: "IntroCarousel",
  data() {
    return {
      carousels: [
        { text: "Slide 1", color: "primary" },
        { text: "Slide 2", color: "secundary" },
        { text: "Slide 3", color: "primary" },
        { text: "Slide 4", color: "secundary" },
        { text: "Slide 5", color: "primary" }
      ]
    };
  }
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

.logo {
  width: 15rem;
  margin: 0 auto;
  img {
    margin-top: 5rem;
  }
}
</style>