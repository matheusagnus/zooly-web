<template>
  <div>
    <modal-template v-if="toggle" class="override-modal">
      <template #header>
        <b-icon icon="close" @click.native="toggleInfoModal()" />
        <h3>{{ data.title }}</h3>
      </template>
      <template #body>
        <div class="task">
          <p class="user">{{ data.user }}, </p>

          <p class="description">{{ data.description }}</p>

          <p class="date">{{ data.day }}</p>
        </div>
      </template>
      <template #footer class="columns is-centered">
        <div class="action-modal">
          <b-button class="btn" type="is-danger" @click.native="toggleInfoModal()">Fechar</b-button>
        </div>
      </template>
    </modal-template>
  </div>
</template>

<script>
import ModalTemplate from "../shared/ModalTemplate";
export default {
  name: "Task",
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
  max-height: 25rem;
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
  justify-content: center;
  .btn {
    margin-top: 1rem;
    height: 2.5rem;
    width: 33%;
    font-weight: 700;
  }
}
</style>
