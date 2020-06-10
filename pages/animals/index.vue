<template>
  <section class="container">
    <div class="hero">
      <div class="text">
        <h1 class="title">Animais</h1>
        <p class="subtitle">Todos os animais cadastrados</p>
      </div>
      <div class="action">
        <b-button type="is-danger" icon-left="plus" rounded @click="toggleAddAnimal()">Animal</b-button>
      </div>
      <hr />
    </div>

    <div class="animal-table">
      <no-data v-if="animalsData.length === 0 ? true : false" />
      <b-table v-else :data="animalsData" :loading="isLoading" :checkable="false" :paginated="false">
        <template slot-scope="columns">
          <b-table-column field="id" label="ID">{{ columns.row.id }}</b-table-column>
          <b-table-column field="nickname" label="Apelido">{{ columns.row.nickname }}</b-table-column>
          <b-table-column field="popularName" label="Nome popular">{{ columns.row.popularName }}</b-table-column>
          <b-table-column field="responsible" label="Responsável">{{ columns.row.responsible }}</b-table-column>
          <b-table-column field="action" label="Ações">
            <b-icon
              @click.native="toggleAnimalRecord(columns.row)"
              type="is-danger"
              icon="file-find"
            />
            <b-icon @click.native="toggleEditAnimal(columns.row)" type="is-danger" icon="pencil" />
            <b-icon v-if="role != 4" @click.native="toggleDeleteAnimal(columns.row)" type="is-danger" icon="delete" />
          </b-table-column>
        </template>
      </b-table>
    </div>

    <animal-record
      :data="selectedAnimal"
      :toggle="animalRecord"
      @closeModal="toggleAnimalRecord()"
    />
    <add-animal
      :toggle="addAnimal"
      @closeModal="toggleAddAnimal()"
    />
    <edit-animal
      :data="selectedAnimal"
      v-if="editAnimal"
      :toggle="editAnimal"
      @closeModal="toggleEditAnimal()"
    />
    <delete-animal
      :data="selectedAnimal"
      :toggle="deleteAnimal"
      @closeModal="toggleDeleteAnimal()"
    />
  </section>
</template>

<script>
import AnimalRecord from "@/components/modal/AnimalRecord";
import AddAnimal from "@/components/modal/AddAnimal";
import EditAnimal from "@/components/modal/EditAnimal";
import DeleteAnimal from "@/components/modal/DeleteAnimal";
import NoData from '@/components/shared/NoData'

export default {
  name: "Animal",
  components: { AnimalRecord, AddAnimal, EditAnimal, DeleteAnimal, NoData },
  data() {
    return {
      isLoading: false,
      animalRecord: false,
      addAnimal: false,
      editAnimal: false,
      deleteAnimal: false,
      selectedAnimal: null,
      data: []
    }
  },
  computed: {
    animalsData () {
      console.log(this.$store.state.animals.animalsData)
      return this.$store.state.animals.animalsData
    }
  },
  mounted () {
    this.role = this.$store.state.user.user.role
    this.$store.dispatch('animals/getAnimals')
  },
  methods: {
    toggleAnimalRecord(value) {
      this.selectedAnimal = value;
      this.animalRecord = !this.animalRecord;
    },
    toggleEditAnimal (value) {
      this.selectedAnimal = value;
      this.editAnimal = !this.editAnimal
    },
    toggleAddAnimal () {
      this.addAnimal = !this.addAnimal
    },
    toggleDeleteAnimal (value) {
      this.selectedAnimal = value;
      this.deleteAnimal = !this.deleteAnimal
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