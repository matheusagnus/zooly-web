<template>
  <section class="container">
    <div class="hero">
      <div class="text">
        <h1 class="title">Animais</h1>
        <p class="subtitle">Todos os animais cadastrados</p>
      </div>
      <hr />
    </div>

    <div class="animal-table">
      <b-table :data="data" :loading="isLoading" :checkable="false" :paginated="false">
        <template slot-scope="columns">
          <b-table-column field="id" label="ID">{{ columns.row.id }}</b-table-column>
          <b-table-column field="nickname" label="Apelido">{{ columns.row.nickname }}</b-table-column>
          <b-table-column field="popular_name" label="Nome popular">{{ columns.row.popular_name }}</b-table-column>
          <b-table-column field="responsible" label="Responsável">{{ columns.row.responsible }}</b-table-column>
          <b-table-column field="action" label="Ações">
            <b-icon
              @click.native="toggleAnimalRecord(columns.row)"
              type="is-danger"
              icon="file-find"
            />
            <b-icon @click.native="toggleEditUser(columns.row)" type="is-danger" icon="pencil" />
            <b-icon @click.native="toggleDeleteUser(columns.row)" type="is-danger" icon="delete" />
          </b-table-column>
        </template>
      </b-table>
    </div>

    <animal-record
      :data="selectedAnimal"
      :toggle="animalRecord"
      @closeModal="toggleAnimalRecord()"
    />
  </section>
</template>

<script>
import AnimalRecord from "@/components/modal/AnimalRecord";

export default {
  name: "Animal",
  components: { AnimalRecord },
  data() {
    return {
      isLoading: false,
      animalRecord: false,
      deleteUser: false,
      editUser: false,
      selectedAnimal: null,
      data: [
        {
          id: 1,
          nickname: "Mel",
          popular_name: "Cão",
          responsible: "Matheus"
        },
        {
          id: 2,
          nickname: "Meggie",
          popular_name: "Cão",
          responsible: "Angleby"
        },
        {
          id: 3,
          nickname: "Phablo",
          popular_name: "Elefante",
          responsible: "Wesley"
        }
      ]
    }
  },
  methods: {
    toggleAnimalRecord(value) {
      this.selectedAnimal = value;
      this.animalRecord = !this.animalRecord;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/stylesheet/base";

.animal-table {
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