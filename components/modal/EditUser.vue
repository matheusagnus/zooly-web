<template>
  <div>
    <modal-template v-show="toggle" class="override-modal">
      <template #header>
        <b-icon icon="close" @click.native="toggleInfoModal()" />
        <h3>Editar {{ data.name }}</h3>
      </template>
      <template #body>
        <form>
          <b-field label="Nome">
            <b-input v-model="name" @input="isReady()" placeholder="Digite aqui..." />
          </b-field>
          <b-field label="E-mail">
            <b-input v-model="email" @input="isReady()" placeholder="Digite aqui..." />
          </b-field>
          <b-field label="Senha">
            <b-input v-model="password" @input="isReady()" placeholder="Digite aqui..." password-reveal />
          </b-field>
          <b-field label="Permissão">
            <b-select v-model="selectedRole" @input="isReady()" placeholder="Selecione uma permissão">
                <option
                    v-for="option in roles"
                    :value="option.role"
                    :key="option.role">
                    {{ option.title }}
                </option>
            </b-select>
          </b-field>
        </form>
      </template>
      <template #footer class="columns is-centered">
        <div class="action-modal">
          <b-button @click="edit" class="btn-secundary" :disabled="disableButton">Editar</b-button>
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
      disableButton: true,
      name: this.data.name,
      email: this.data.email,
      password: null,
      selectedRole: null,
      roles: [
        { role: 1, title: 'Admin' },
        { role: 2, title: 'Gestor' },
        { role: 3, title: 'Médico' },
        { role: 4, title: 'Funcionário' }
      ]
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
        this.name &&
        this.email &&
        this.password &&
        this.selectedRole
      ) {
        this.disableButton = false
      }
    },
    edit () {
      this.$store.dispatch('person/editPerson', {
        id: this.data.id,
        name: this.name,
        email: this.email, 
        password: this.password,
        userRole: { id: this.selectedRole }
      })
    }
  },
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

.control.has-icons-left .icon,
.control.has-icons-right .icon {
  pointer-events: auto !important;
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
