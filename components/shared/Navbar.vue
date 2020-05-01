<template>
    <b-navbar>
        <template slot="start">
            <b-navbar-item href="#" v-if="false">
                Projeto Zooly
            </b-navbar-item>
            <b-navbar-item href="#" v-else>
              <b-icon icon="chevron-left" /> <span>Voltar</span>
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
              <b-button type="is-danger" icon-right="power" />
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style lang="scss" scoped>

</style>