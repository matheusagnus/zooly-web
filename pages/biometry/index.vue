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
      <no-data v-if="biometryData.length === 0" />
      <b-table v-else :data="biometryData" :loading="isLoading" :checkable="false" :paginated="false">
        <template slot-scope="columns">
          <b-table-column field="id" label="ID">{{ columns.row.id }}</b-table-column>
          <b-table-column field="animalId" label="Animal ID">{{ columns.row.animalId }}</b-table-column>
          <b-table-column field="creationDate" label="Data">{{ columns.row.creationDate }}</b-table-column>
          <b-table-column field="action" label="Ações">
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
import NoData from '@/components/shared/NoData'

export default {
  name: "Biometry",
  components: { BiometryRecord, DeleteBiometry, NoData },
  data() {
    return {
      isLoading: false,
      biometryRecord: false,
      deleteBiometry: false,
      selectedBiometry: null
    }
  },
  computed: {
    biometryData () {
      return this.$store.state.biometrics.biometricsData
    }
  },
  mounted () {
    this.$store.dispatch('biometrics/getAllBiometry')
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