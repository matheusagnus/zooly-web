<template>
  <div id="app-view">
    <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="true" />
    <nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    isLoading () {
      return this.$store.state.loading.isLoading
    } 
  }
}
</script>

<style lang="scss">
@import '@/assets/stylesheet/base.scss';

html, body {
  height: 100%;
  background-color: #0A0D27;
  font-family: $font-primary;
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
