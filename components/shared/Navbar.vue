<template>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="@/assets/images/logo-colored.svg" alt="Logomarca do projeto zooly" />
        </b-navbar-item>
      </template>
        <template slot="start">
            <b-navbar-item href="#" v-if="true">
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
.navbar-item img {
  width: 3rem;
  max-height: 3.75rem;
}
</style>