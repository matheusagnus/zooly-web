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
            <b-input placeholder="Digite aqui..." v-model="popular_name" />
          </b-field>
          <b-field label="Nome Científico">
            <b-input placeholder="Digite aqui..." v-model="scientific_name"/>
          </b-field>
          <b-field label="Responsável">
            <b-input placeholder="Digite aqui..." v-model="responsible"/>
          </b-field>
          <b-field label="Observação">
            <b-input type="textarea" v-model="notes"/>
          </b-field>
        </form>
      </template>
      <template #footer class="columns is-centered">
        <div class="action-modal">
          <b-button class="btn-secundary">Editar</b-button>
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
      nickname: this.data.nickname,
      popular_name: this.data.popular_name,
      scientific_name: this.data.scientific_name,
      responsible: this.data.responsible,
      notes: this.data.notes
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
