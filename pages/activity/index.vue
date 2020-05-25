<template>
  <section class="container">
    <div class="hero">
      <div class="text">
        <h1 class="title">Atividades</h1>
        <p class="subtitle">Todas atividades recentes relacionados a você</p>
      </div>
      <hr />
    </div>

    <div class="logs-board">
      <div class="logs" v-for="log in logs" :key="log.index">
        <div class="log">
          <b-icon type="is-primary" :icon="log.icon" />
          <p>{{ log.user }} {{ log.message }} {{ log.time }} {{ log.day }}</p>
        </div>
        <hr />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Activity",
  data() {
    return {
      logs: [
        {
          index: 1,
          icon: "clipboard-text-outline",
          user: "Matheus",
          message: "cadastrou uma atividade às",
          time: "12:08",
          day: "25/05/2020"
        },
        {
          index: 2,
          icon: "paw",
          user: "Angleby",
          message: "editou um animal às",
          time: "12:08",
          day: "25/05/2020"
        },
        {
          index: 3,
          icon: "pulse",
          user: "Matheus",
          message: "deletou uma biometria às",
          time: "12:08",
          day: "25/05/2020"
        },
        {
          index: 4,
          icon: "account-supervisor",
          user: "Wesley",
          message: "cadastrou um usuário às",
          time: "12:08",
          day: "25/05/2020"
        },
        {
          index: 5,
          icon: "clipboard-text-outline",
          user: "Matheus",
          message: "cadastrou uma atividade às",
          time: "12:08",
          day: "25/05/2020"
        },
        {
          index: 6,
          icon: "paw",
          user: "Angleby",
          message: "editou um animal às",
          time: "12:08",
          day: "25/05/2020"
        },
        {
          index: 7,
          icon: "pulse",
          user: "Matheus",
          message: "deletou uma biometria às",
          time: "12:08",
          day: "25/05/2020"
        },
        {
          index: 8,
          icon: "account-supervisor",
          user: "Wesley",
          message: "cadastrou um usuário às",
          time: "12:08",
          day: "25/05/2020"
        },
        {
          index: 9,
          icon: "clipboard-text-outline",
          user: "Matheus",
          message: "cadastrou uma atividade às",
          time: "12:08",
          day: "25/05/2020"
        },
        {
          index: 10,
          icon: "paw",
          user: "Angleby",
          message: "editou um animal às",
          time: "12:08",
          day: "25/05/2020"
        },
        {
          index: 11,
          icon: "pulse",
          user: "Matheus",
          message: "deletou uma biometria às",
          time: "12:08",
          day: "25/05/2020"
        },
        {
          index: 12,
          icon: "account-supervisor",
          user: "Wesley",
          message: "cadastrou um usuário às",
          time: "12:08",
          day: "25/05/2020"
        }
      ]
    };
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