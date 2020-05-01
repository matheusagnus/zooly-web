<template>
  <div id="app-view">
    <nuxt />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
html, body {
  height: 100%;
}

#app-view {
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100vh;
  background-color: #0A0D27;
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
