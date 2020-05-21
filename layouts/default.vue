<template>
  <div id="app-view">
    <div class="default">
      <div class="card">
        <navbar />
        <nuxt />
        <hr>
      </div>
    </div>
    <stepped />
  </div>
</template>

<script>
import Navbar from '@/components/shared/Navbar'
import Stepped from '@/components/shared/Stepped'
export default {
  components: { Navbar, Stepped }
}
</script>

<style lang="scss">
@import '@/assets/stylesheet/base.scss';

html, body {
  height: 100%;
  background-color: #0A0D27;
  font-family: $font-primary;
}

.default {
  margin: 3rem auto;
  width: 90%;
  .card {
    padding: 1.5rem;
    border-radius: 1rem;
    height: 100%;
    background-color: #fafafa;
  }
  .container {
    padding: 0.75rem;
    margin: 0 auto;
    position: relative;
  }
}

@media (max-width: 64rem) {
  .view-mobile {
    display: inline !important;
  }
  .view-desktop {
    display: none !important;
  }
}

.page-enter-active, .page-leave-active {
  transition: opacity .5s
}
.page-enter, .page-leave-active {
  opacity: 0
}

.bounce-enter-active {
  animation: bounce-in .6s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% { transform: scale(0) }
  50% { transform: scale(1.5) }
  100% { transform: scale(1) }
}
@keyframes bounce-out {
  0% { transform: scale(1) }
  50% { transform: scale(1.5) }
  100% { transform: scale(0) }
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>
