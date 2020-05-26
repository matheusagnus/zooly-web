<template>
  <section class="container">
    <div class="hero">
      <div class="text">
        <h1 class="title">Biometria Animal</h1>
        <p class="subtitle">
          Visualização sobre as medidas cadastradas.
        </p>
      </div>
      <hr />
    </div>

    <div class="biometry-table">
      <b-table :data="data" :loading="isLoading" :checkable="false" :paginated="false">
        <template slot-scope="columns">
          <b-table-column field="id" label="ID">{{ columns.row.id }}</b-table-column>
          <b-table-column field="date" label="Data">{{ columns.row.date }}</b-table-column>
          <b-table-column field="nickname" label="Apelido">{{ columns.row.nickname }}</b-table-column>
          <b-table-column field="responsible" label="Responsável">{{ columns.row.responsible }}</b-table-column>
          <b-table-column field="action" label="Ações">
            <b-icon @click.native="toggleBiometryRecord(columns.row)" type="is-danger" icon="file-find" />
            <b-icon @click.native="toggleDeleteBiometry(columns.row)" type="is-danger" icon="delete" />
          </b-table-column>
        </template>
      </b-table>
    </div>

    <biometry-record 
      :toggle="biometryRecord"
      @closeModal="toggleBiometryRecord()"
    />
    <delete-biometry 
      :toggle="deleteBiometry"
      :data="selectedBiometry"
      @closeModal="toggleDeleteBiometry()"
    />
  </section>
</template>

<script>
import BiometryRecord from '@/components/modal/BiometryRecord'
import DeleteBiometry from '@/components/modal/DeleteBiometry'

export default {
  name: "Biometry",
  components: { BiometryRecord, DeleteBiometry },
  data() {
    return {
      isLoading: false,
      biometryRecord: false,
      deleteBiometry: false,
      selectedBiometry: null,
      data: [
        {
          id: 1,
          date: "25/04/2020",
          responsible: "Matheus",
          nickname: "Mel"
        },
        {
          id: 2,
          date: "25/04/2020",
          responsible: "Matheus",
          nickname: "Mel"
        },
        {
          id: 3,
          date: "27/04/2020",
          responsible: "Welsey",
          nickname: "Meggie"
        },
        {
          id: 4,
          date: "28/04/2020",
          responsible: "Matheus",
          nickname: "Duquesa"
        },
        {
          id: 5,
          date: "29/04/2020",
          responsible: "Matheus",
          nickname: "Queen"
        }
      ]
    }
  },
  methods: {
    toggleBiometryRecord () {
      this.biometryRecord = !this.biometryRecord
    },
    toggleDeleteBiometry (value) {
      this.selectedBiometry = value
      this.deleteBiometry = !this.deleteBiometry
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/stylesheet/base";

.biometry-table {
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