<template>
  <div>
    <modal-template v-show="toggle" class="override-modal">
      <template #header>
        <b-icon icon="close" @click.native="toggleInfoModal()" />
        <h3>Adicionar nova Biometria</h3>
      </template>
      <template #body>
        <form>
          <b-field label="Apelido">
            <b-input v-model="nickname" disabled placeholder="Digite aqui..." />
          </b-field>
          <b-field label="Nome Popular">
            <b-input v-model="popularName" disabled placeholder="Digite aqui..." />
          </b-field>
          <b-field label="Nome Científico">
            <b-input v-model="scientificName" disabled placeholder="Digite aqui..." />
          </b-field>

          <hr>

          <b-field label="Observação">
            <b-input v-model="note" @input="isReady()" type="textarea" />
          </b-field>

          <b-field label="Peso (kg)">
            <b-numberinput v-model="weight" placeholder="Digite aqui..." />
          </b-field>
          <b-field label="Altura (cm)">
            <b-numberinput v-model="height" placeholder="Digite aqui..." />
          </b-field>
          <b-field label="Comprimento (cm)">
            <b-numberinput v-model="length" placeholder="Digite aqui..." />
          </b-field>
          <b-field label="Largura (cm)">
            <b-numberinput v-model="width" placeholder="Digite aqui..." />
          </b-field>

          <hr>

          <b-field label="Prescrição">
            <b-input v-model="prescription" @input="isReady()" type="textarea" />
          </b-field>
        </form>
      </template>
      <template #footer class="columns is-centered">
        <div class="action-modal">
          <b-button :disabled="disabledButton" @click="create()" class="btn-secundary">Criar</b-button>
        </div>
      </template>
    </modal-template>
  </div>
</template>

<script>
import ModalTemplate from "../shared/ModalTemplate";
export default {
  name: "AddBiometry",
  components: { ModalTemplate },
  data() {
    return {
      disabledButton: true,
      nickname: this.data.nickname,
      popularName: this.data.popularName,
      scientificName: this.data.scientificName,
      note: null,
      weight: null,
      height: null,
      length: null,
      width: null,
      prescription: null
    };
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
    isReady () {
      if (
        this.note &&
        this.prescription
      ) {
        this.disabledButton = false
      }
    },
    create () {
      this.$store.dispatch('biometrics/createBiometry', {
        animalId: this.data.id,
        height: this.height,
        length: this.length,
        note: this.note,
        prescription: this.prescription,
        userId: sessionStorage.uid,
        weight: this.weight
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/stylesheet/base";
.override-modal /deep/ .modal-box {
  width: 100%;
  max-width: 55rem;
  height: 100%;
  max-height: 40rem;
  .modal-body {
    max-height: 100%;

    hr {
      width: 50%;
      margin: 1.5rem auto;
      border: 0.05rem solid $primary;
    }
  }
}

.control /deep/.help.counter {
  display: none;
}
.action-modal {
  display: flex;
  justify-content: flex-end;
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
