<template>
  <section class="container">
    <div class="hero">
      <h1 class="title">Quadro de Tarefas</h1>
      <p class="subtitle">Aqui estão as tarefas ativas para você</p>
      <hr>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Board'
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
</style>