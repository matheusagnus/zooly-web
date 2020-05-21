<template>
    <div class="card-menu columns is-multiline is-desktop">
      <div class="column is-4 is-variable" v-for="item in menuItems" :key="item.title">
        <nuxt-link :to="item.link">
          <div class="card has-text-centered ">
            <b-icon type="is-primary" :icon="item.icon" />
            <h4>{{ item.title }}</h4>
          </div>
        </nuxt-link>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      menuItems: {
        type: Array,
        required: true,
        default: () => []
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheet/base';

.card-menu {
  margin-top: 1rem;
  justify-content: center;
  .card {
    margin: 0.75rem;
    height: 5rem;
    padding: 1rem;
    background-color: #fafafa;
    a {
      color: $subtitle-color;
    }
    &:hover {
      border: 0.09375rem solid $primary;
      cursor: pointer;
    }
  }
  h4 {
    font-weight: $font-semi-bold;
  }
}

@media (max-width: 64rem) {
  .card-menu .card {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 1rem;
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>