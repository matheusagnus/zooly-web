<template>
  <div>
    <modal-template v-if="toggle" class="override-modal">
      <template #header>
        <b-icon icon="close" @click.native="toggleInfoModal()" />
        <h3>Deletar Tarefa</h3>
      </template>
      <template #body>
        <div class="has-text-centered">
          <p>Você tem certeza que deseja excluir a tarefa de <strong>"{{data.title}}"</strong>?</p>
        </div>
      </template>
      <template #footer class="columns is-centered">
        <div class="action-modal">
          <b-button icon-left="delete" class="btn" type="is-danger" @click.native="deleteTask()">Deletar</b-button>
          <b-button class="btn-secundary" @click.native="toggleInfoModal()">Fechar</b-button>
        </div>
      </template>
    </modal-template>
  </div>
</template>

<script>
import ModalTemplate from "../shared/ModalTemplate";
export default {
  name: "DeleteTask",
  components: { ModalTemplate },
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
    deleteTask () {
      this.$store.dispatch('tasks/deleteTask', this.data.id).then(() => { this.toggleInfoModal() })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/stylesheet/base";
.override-modal /deep/ .modal-box {
  width: 100%;
  max-width: 35rem;
  height: 100%;
  max-height: 20rem;
  .modal-body {
    max-height: 100%;

    .task {
      .user {
        font-weight: $font-bold;
        margin-bottom: 1rem;
      }
      .date {
        font-size: 0.85rem;
        margin-top: 1.75rem;
        text-align: right;
        font-weight: $font-light;
      }
    }
  }
}

.control /deep/.help.counter {
  display: none;
}
.action-modal {
  display: flex;
  justify-content: space-between;
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
