<template>
  <section class="container">
    <div class="hero">
      <div class="text">
        <h1 class="title">Gestão de Pessoas</h1>
        <p class="subtitle">Todas as pessoas que têm acesso a aplicação</p>
      </div>
      <div class="action">
        <b-button type="is-danger" icon-left="plus" rounded @click="toggleNewUser()">Pessoa</b-button>
      </div>
      <hr />
    </div>

    <div class="people-table">
        <b-table
          v-if="data"
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
          <b-table-column field="userRole.id" label="Permissão">
            {{ columns.row.userRole.id }}
          </b-table-column>
          <b-table-column field="action" label="Ações">
            <b-icon @click.native="toggleEditUser(columns.row)" type="is-danger" icon="pencil" />
            <b-icon @click.native="toggleDeleteUser(columns.row)" type="is-danger" icon="delete" />
          </b-table-column>
        </template>
      </b-table>
      <no-data v-else />
    </div>

    <add-new-user :toggle="newUser" @closeModal="toggleNewUser()" />
    <edit-user v-if="editUser" :data="selectedUser" :toggle="editUser" @closeModal="toggleEditUser()" />
    <delete-user :data="selectedUser" :toggle="deleteUser" @closeModal="toggleDeleteUser()" />
  </section>
</template>

<script>
import AddNewUser from "@/components/modal/AddNewUser";
import EditUser from "@/components/modal/EditUser";
import DeleteUser from "@/components/modal/DeleteUser";
import NoData from '@/components/shared/NoData'
  export default {
    name: 'People',
    components: { AddNewUser, DeleteUser, EditUser, NoData },
    data () {
      return {
        newUser: false,
        deleteUser: false,
        editUser: false,
        selectedUser: null
      }
    },
    computed: {
      isLoading () {
        return this.$store.state.person.isLoading
      },
      data () {
        if (this.$store.state.person.dataPerson) {
          return this.$store.state.person.dataPerson
        }
        
        return false
      }
    },
    mounted() {
      this.getPersons()
    },
    methods: {
      toggleNewUser () {
        this.newUser = !this.newUser
      },
      toggleDeleteUser (value) {
        this.selectedUser = value
        this.deleteUser = !this.deleteUser
      },
      toggleEditUser (value) {
        this.selectedUser = value
        this.editUser = !this.editUser
      },
      getPersons () {
        this.$store.dispatch('person/getPersons')
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheet/base';

.people-table {
  margin-top: 1.5rem;
  /deep/.b-table {
    table {
      background-color: #fafafa;
    }
    .icon {
      cursor: pointer;
    }
  }
}
</style>