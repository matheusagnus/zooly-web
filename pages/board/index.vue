<template>
  <section class="container">
    <div class="hero">
      <h1 class="title">Quadro de Tarefas</h1>
        <p class="subtitle">Aqui estão as tarefas ativas para você</p>
      <hr>
    </div>

    <div class="board columns is-multiline is-desktop">
      <div class="card column is-4 is-variable" v-for="task in tasks" :key="task.title">
        <h1 class="card-board-title">{{ task.title }}</h1>
        <p class="card-board-day">{{ task.day }}</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Board',
    data () {
      return {
        tasks: [
          { title: 'Dar comida para o Jambô', day: '22/07/2020 ás 19:11' },
          { title: 'Dar comida para o Wesley', day: '22/07/2020 ás 18:52' },
          { title: 'Dar comida para o Ang', day: '22/07/2020 ás 10:03' },
          { title: 'Dar comida para o Jambô', day: '22/07/2020 ás 12:13' },
          { title: 'Dar comida para o Wesley', day: '22/07/2020 ás 15:32' },
          { title: 'Dar comida para o Ang', day: '22/07/2020 ás 09:16' },
          { title: 'Dar comida para o Jambô', day: '22/07/2020 ás 12:13' },
          { title: 'Dar comida para o Wesley', day: '22/07/2020 ás 15:32' },
          { title: 'Dar comida para o Ang', day: '22/07/2020 ás 09:16' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheet/base';
.hero {
  .title {
    margin-bottom: 0.25;
  }
  .subtitle {
    font-size: 0.85rem;
    font-style: italic;
    color: $subtitle-color;
  }
  hr {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    border: 0.05rem solid $primary;
  }
}

.filters {
  margin-top: 1.5rem;
}

.board {
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1.5rem;
  .card {
    margin: 0.75rem;
    border-top: 0.25rem solid $primary;
    max-width: 25%;
    height: 6rem;
    background-color: #fafafa;
    .card-board-title {
      font-size: 0.85rem;
      font-weight: $font-bold;
    }

    .card-board-day {
      font-size: 0.7rem;
      margin-top: 1.75rem;
      text-align: right;
      font-weight: $font-light;
    }
  }
}

@media (max-width: 64rem) {
  .board .card {
    max-width: 100%;
  }
}
</style>