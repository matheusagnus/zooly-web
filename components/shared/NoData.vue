<template>
  <div class="nodata">
    <h1 class="title">Não há nada aqui para ser listado</h1>
    <p class="subtitle">Talvez você não tenha acesso ou nenhum dado foi incluído.</p>
  </div>
</template>

<script>
  export default {
    name: 'NoData',
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheet/base';
.nodata {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  text-align: center;
  p {
    font-size: 16px;
  }
}
</style>