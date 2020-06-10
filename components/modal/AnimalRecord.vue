<template>
  <div>
    <modal-template v-if="toggle" class="override-modal">
      <template #header>
        <b-icon icon="close" @click.native="toggleInfoModal()" />
        <h3>Prontuário Animal</h3>
      </template>
      <template #body>
        <div class="animal-record">
          <div class="group-info">
            <h1 class="group-title">Apelido</h1>
            <p class="group-text">{{ data.nickname }}</p>
          </div>

          <div class="group-info">
            <h1 class="group-title">Nome Popular</h1>
            <p class="group-text">{{ data.popularName }}</p>
          </div>

          <div class="group-info">
            <h1 class="group-title">Nome Científico</h1>
            <p class="group-text">{{ data.scientificName }}</p>
          </div>

          <hr>

          <div class="group-info">
            <h1 class="group-title">Responsável</h1>
            <p class="group-text">{{ data.tasks[0].responsibleUserName }}</p>
          </div>

          <div class="group-info">
            <h1 class="group-title">Data de Entrada</h1>
            <p class="group-text">{{ data.creationDate }}</p>
          </div>

          <div class="group-info">
            <h1 class="group-title">Descrição</h1>
            <p class="group-text">{{ data.note }}</p>
          </div>

          <hr>

          <b-icon @click.native="toggleAddBiometry(data)" type="is-danger" icon="plus" />

          <div class="group-info">
            <h1 class="group-title">Biometrias</h1>
          </div>

          <div v-if="data.biometrics.length === 0" class="biometrys">
            <div class="advice">
              <p><strong>Não há dados aqui.</strong></p>
              <p>Adicione uma biometria</p>
            </div>
          </div>
          <div v-else class="biometrys" v-for="option in data.biometrics" :key="option.id">
            <p><strong>{{ option.creationDate }}</strong></p>
            <b-icon @click.native="toggleBiometryRecord(option)" type="is-danger" icon="eye" />
          </div>
        </div>
      </template>
      <template #footer class="columns is-centered">
        <div class="action-modal">
          <b-button class="btn-secundary" @click.native="toggleInfoModal()">Fechar</b-button>
        </div>
      </template>
    </modal-template>

    <add-biometry 
      :data="selectedData"
      :toggle="addBiometry"
      v-if="addBiometry"
      @closeModal="toggleAddBiometry()"
    />
    <biometry-record 
      :data="selectedBiometry"
      v-if="biometryRecord"
      :toggle="biometryRecord"
      @closeModal="toggleBiometryRecord()"
    />
  </div>
</template>

<script>
import ModalTemplate from "../shared/ModalTemplate";
import BiometryRecord from '@/components/modal/BiometryRecord'
import AddBiometry from '@/components/modal/AddBiometry'

export default {
  name: "AnimalRecord",
  components: { ModalTemplate, BiometryRecord, AddBiometry },
  data () {
    return {
      addBiometry: false,
      biometryRecord: false,
      selectedData: null,
      selectedBiometry: null
    }
  },
  mounted () {
    console.log('animal record: ', this.data)
  },
  props: {
    toggle: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    toggleInfoModal() {
      this.$emit("closeModal");
    },
    toggleBiometryRecord (value) {
      this.selectedBiometry = { biometry: value, animal: this.data }
      this.biometryRecord = !this.biometryRecord
    }, 
    toggleAddBiometry (value) {
      console.log('foi')
      this.selectedData = value
      this.addBiometry = !this.addBiometry
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/stylesheet/base";
.override-modal /deep/ .modal-box {
  width: 100%;
  max-width: 65rem;
  height: 100%;
  max-height: 40rem;
  .modal-body {
    max-height: 100%;
    .animal-record {
      margin-left: 1rem;
      margin-right: 1rem;
      .icon {
        position: absolute;
        right: 0;
        cursor: pointer;
      }
      hr {
        width: 50%;
        margin: 1.5rem auto;
        border: 0.05rem solid $primary;
      }
      .biometrys {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.35rem; 
        strong {
          color: $primary;
        }
        .advice {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
      .group-info {
        margin-bottom: 0.75rem;
        .group-title {
          font-weight: $font-bold;
        }
        .group-text {
          text-align: justify;
          text-justify: inter-word;
        }
      }
    }
  }
}

.control /deep/.help.counter {
  display: none;
}
.action-modal {
  display: flex;
  justify-content: center;
  .btn {
    margin-top: 1rem;
    height: 2.5rem;
    width: 33%;
    font-weight: 700;
  }
  .btn-secundary {
    margin-top: 1rem;
    height: 2.5rem;
    width: 33%;
    font-weight: 700;
    color: $primary;
    border: 0.05rem solid $primary;

    &:hover {
      background: linear-gradient(
        to right,
        rgba(255, 114, 95, 1) 30%,
        rgba(242, 49, 165, 1) 100%
      );
      color: #fafafa;
    }
  }
}
</style>
