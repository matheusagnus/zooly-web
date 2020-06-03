<template>
  <div>
    <modal-template v-show="toggle" class="override-modal">
      <template #header>
        <b-icon icon="close" @click.native="toggleInfoModal()" />
        <h3>Criar Nova Pessoa</h3>
      </template>
      <template #body>
        <form>
          <b-field label="Nome">
            <b-input placeholder="Digite aqui..." />
          </b-field>
          <b-field label="Sobrenome">
            <b-input placeholder="Digite aqui..." />
          </b-field>
          <b-field label="E-mail">
            <b-input placeholder="Digite aqui..." />
          </b-field>
          <b-field label="Senha">
            <b-input placeholder="Digite aqui..." v-model="password" password-reveal />
          </b-field>
          <b-field label="Permissão">
            <b-select placeholder="Selecione uma permissão">
                <option
                    v-for="option in data"
                    :key="option.role">
                    {{ option.title }}
                </option>
            </b-select>
        </b-field>
        </form>
      </template>
      <template #footer class="columns is-centered">
        <div class="action-modal">
          <b-button class="btn-secundary">Criar</b-button>
        </div>
      </template>
    </modal-template>
  </div>
</template>

<script>
import ModalTemplate from "../shared/ModalTemplate";
export default {
  name: "AddNewUser",
  components: { ModalTemplate },
  data() {
    return {
      password: null,
      data: [
        { role: 1, title: 'Admin' },
        { role: 2, title: 'Gestor' },
        { role: 3, title: 'Médico' },
        { role: 4, title: 'Funcionário' }
      ],
      option: null
    };
  },
  computed: {
    filteredDataArray() {
      return this.data.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        );
      });
    }
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
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/stylesheet/base";
.override-modal /deep/ .modal-box {
  width: 100%;
  max-width: 25rem;
  height: 100%;
  max-height: 36rem;
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

@media (max-width: 64rem) {
  .override-modal /deep/ .modal-box {
    max-height: 33rem;
  }
}
</style>
