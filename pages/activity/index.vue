<template>
  <section class="container">
    <div class="hero">
      <div class="text">
        <h1 class="title">Atividades</h1>
        <p class="subtitle">Todas atividades recentes relacionados a você</p>
      </div>
      <hr />
    </div>

    <div v-if="logs.length === 0 ? false : true" class="logs-board">
      <div class="logs" v-for="log in logs" :key="log.id">
        <div class="log">
          <b-icon type="is-primary" :icon="log.icon" />
          <p>{{ log.userName }} {{ log.message }} {{ log.creationDate }}</p>
        </div>
        <hr />
      </div>
    </div>

    <div v-else class="logs-board">
      <no-data />
    </div>
  </section>
</template>

<script>
import NoData from '@/components/shared/NoData'
export default {
  name: "Activity",
  components: { NoData },
  computed: {
    logs () {
      return this.$store.state.activity.activityData
    }
  },
  mounted () {
    this.role = this.$store.state.user.user.role
    if (this.$store.state.user.user.role === 1 || this.$store.state.user.user.role === 2) {
      this.$store.dispatch('activity/getActivity')
    } else {
      this.$store.dispatch('activity/getUserActivity')
    }
    
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/stylesheet/base";
.logs-board {
  margin: 1.5rem 10rem 0 10rem;
  .logs {
    .log {
      display: flex;
      .icon {
        margin-right: 0.75rem;
      }
    }
    hr {
      margin: 0.5rem auto;
      border: 0.05rem solid $primary;
    }
  }
}

@media (max-width: 64rem) {
  .logs-board {
    margin: 1.5rem 1rem 0 1rem;
  }
}
</style>