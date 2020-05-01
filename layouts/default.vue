<template>
  <div>
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

@media (max-width: 64rem) {
  .view-mobile {
    display: inline !important;
  }
  .view-desktop {
    display: none !important;
  }
}
</style>
