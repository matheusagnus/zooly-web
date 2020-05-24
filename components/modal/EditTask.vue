<template>
  <div>
    <modal-template v-if="toggle" class="override-modal">
      <template #header>
        <b-icon icon="close" @click.native="toggleInfoModal()" />
        <h3>Editar tarefa de "{{ data.title }}"</h3>
      </template>
      <template #body>
        <form>
          <b-field label="Título">
            <b-input v-model="title" placeholder="Digite aqui..." maxlength="60" />
          </b-field>
          <b-field label="Data">
            <b-datepicker
              placeholder="Selecione uma data..."
              icon="calendar-today"
              :mobile-native="true"
              v-model="date"
            />
          </b-field>
          <b-field label="Responsável">
            <b-autocomplete
              v-model="user"
              :users="filteredDataArray"
              placeholder="Selecione o responsável..."
              icon="magnify"
              editable
              @select="option => selected = option"
            >
              <template slot="empty">Usuário não existe</template>
            </b-autocomplete>
          </b-field>
          <b-field label="Descrição">
            <b-input v-model="description" type="textarea" />
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
  name: "EditTask",
  components: { ModalTemplate },
  data() {
    return {
      users: ["Matheus", "Wesley", "Angleby"],
      user: this.data.user,
      selected: null,
      title: this.data.title,
      date: null,
      description: this.data.description,
      unwatch: null
    };
  },
  computed: {
    filteredDataArray() {
      return this.users.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.user.toLowerCase()) >= 0
        );
      });
    }
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
