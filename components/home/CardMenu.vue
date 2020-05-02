<template>
    <div class="card-menu columns is-multiline">
      <div class="column is-4 is-variable" v-for="item in menuItems" :key="item.title">
        <div class="card has-text-centered">
          <b-icon type="is-primary" :icon="item.icon" />
          <h4>{{ item.title }}</h4>
        </div>
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
  display: flex;
  margin-top: 1rem;
  .card {
    border: 0.25rem;
    border-color: $primary;
  }
  h4 {
    font-weight: $font-semi-bold;
  }
}
</style>