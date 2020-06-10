<template>
  <div>
    <modal-template v-show="toggle" class="override-modal">
      <template #header>
        <b-icon icon="close" @click.native="toggleInfoModal()" />
        <h3>Editar {{ data.nickname }}</h3>
      </template>
      <template #body>
        <form>
          <b-field label="Apelido">
            <b-input placeholder="Digite aqui..." v-model="nickname" />
          </b-field>
          <b-field label="Nome Popular">
            <b-input placeholder="Digite aqui..." v-model="popularName" />
          </b-field>
          <b-field label="Nome Científico">
            <b-input placeholder="Digite aqui..." v-model="scientificName"/>
          </b-field>
          <b-field label="Observação">
            <b-input type="textarea" v-model="note"/>
          </b-field>
        </form>
      </template>
      <template #footer class="columns is-centered">
        <div class="action-modal">
          <b-button @click="editAnimal()" :disabled="disabledButton" class="btn-secundary">Editar</b-button>
        </div>
      </template>
    </modal-template>
  </div>
</template>

<script>
import ModalTemplate from "../shared/ModalTemplate";
export default {
  name: "AddAnimal",
  components: { ModalTemplate },
  data() {
    return {
      disabledButton: true,
      nickname: this.data.nickname,
      popularName: this.data.popularName,
      scientificName: this.data.scientificName,
      responsible: this.data.responsible,
      note: this.data.note
    };
  },
  mounted() {
    this.isReady()
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
        this.nickname &&
        this.popularName &&
        this.scientificName &&
        this.note
      ) {
        this.disabledButton = false
      }
    },
    editAnimal () {
      this.$store.dispatch('animals/editAnimal', {
        id: this.data.id,
        nickname: this.nickname,
        popularName: this.popularName,
        scientificName: this.scientificName,
        note: this.note,
        tasks: this.data.tasks,
        biometrics: this.data.biometrics
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
