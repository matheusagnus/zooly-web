<template>
  <div>
    <modal-template v-show="toggle" class="override-modal">
      <template #header>
        <b-icon icon="close" @click.native="toggleInfoModal()" />
        <h3>Adicionar novo Animal</h3>
      </template>
      <template #body>
        <form>
          <b-field label="Apelido">
            <b-input v-model="nickname" @input="isReady()" placeholder="Digite aqui..." />
          </b-field>
          <b-field label="Nome Popular">
            <b-input v-model="popularName" @input="isReady()" placeholder="Digite aqui..." />
          </b-field>
          <b-field label="Nome Científico">
            <b-input v-model="scientificName" @input="isReady()" placeholder="Digite aqui..." />
          </b-field>
          <b-field label="Observação">
            <b-input v-model="note" @input="isReady()" type="textarea" />
          </b-field>
        </form>
      </template>
      <template #footer class="columns is-centered">
        <div class="action-modal">
          <b-button @click="create()" :disabled="disabledButton" class="btn-secundary">Criar</b-button>
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
      nickname: null,
      popularName: null,
      scientificName: null,
      note: null
    };
  },
  props: {
    toggle: {
      type: Boolean,
      default: false
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
    create () {
      this.$store.dispatch('animals/createAnimal', {
        nickname: this.nickname,
        popularName: this.popularName,
        scientificName: this.scientificName,
        note: this.note
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
