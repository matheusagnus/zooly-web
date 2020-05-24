<template>
  <section class="container">
    <div class="hero">
      <div class="text">
        <h1 class="title">Gestão de Pessoas</h1>
        <p class="subtitle">Todas as pessoas que têm acesso a aplicação</p>
      </div>
      <div class="action">
        <b-button type="is-danger" icon-left="plus" rounded @click="toggleNewUser()">Criar pessoa</b-button>
      </div>
      <hr />
    </div>

    <div class="people-table">
        <b-table
          :data="data"
          :loading="isLoading"
          :checkable="false"
          :paginated="false"
        >
        <template slot-scope="columns">
          <b-table-column field="name" label="Nome">
            {{ columns.row.name }} {{ columns.row.lastname }}
          </b-table-column>
          <b-table-column field="email" label="E-mail">
            {{ columns.row.email }}
          </b-table-column>
          <b-table-column field="role" label="Permissão">
            {{ columns.row.role }}
          </b-table-column>
          <b-table-column field="action" label="Ações">
            <b-icon type="is-danger" icon="pencil" />
            <b-icon type="is-danger" icon="delete" />
          </b-table-column>
        </template>
      </b-table>
    </div>

    <add-new-user :toggle="newUser" @closeModal="toggleNewUser()" />
  </section>
</template>

<script>
import AddNewUser from "@/components/modal/AddNewUser";

  export default {
    name: 'People',
    components: { AddNewUser },
    data () {
      return {
        isLoading: false,
        newUser: false,
        data: [
          { name: 'Matheus', lastname: 'Ferreira', email: 'ferreira.zx@gmail.com', role: 'Admin' },
          { name: 'Angleby', lastname: 'Vamberg', email: 'angleby@gmail.com', role: 'Gestor' },
          { name: 'Wesley', lastname: 'Garreto', email: 'welsey@gmail.com', role: 'Médico' },
          { name: 'Eliel', lastname: 'Cruz', email: 'eliel@gmail.com', role: 'Funcionário' },
        ]
      }
    },
    methods: {
      toggleNewUser () {
        this.newUser = !this.newUser
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheet/base';

.people-table {
  margin-top: 1.5rem;
  /deep/.b-table table {
    background-color: #fafafa;
  }
}
</style>