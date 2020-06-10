<template>
  <div>
    <modal-template v-if="toggle" class="override-modal">
      <template #header>
        <b-icon icon="close" @click.native="toggleInfoModal()" />
        <h3>Criar Nova Tarefa</h3>
      </template>
      <template #body>
        <form>
          <b-field label="Título">
            <b-input v-model="title" @input="isReady()" placeholder="Digite aqui..." maxlength="60" />
          </b-field>
          <b-field label="Data">
            <b-datepicker
              @input="isReady()"
              v-model="date"
              placeholder="Selecione uma data..."
              icon="calendar-today"
              :mobile-native="true"
            />
          </b-field>
          <b-field label="Responsável">
            <b-autocomplete
                v-model="name"
                :data="filteredDataArray"
                placeholder="Defina o responsável..."
                icon="magnify"
                field="name"
                @select="option => selectedUser = option.id">
                <template slot="empty">No results found</template>
            </b-autocomplete>
          </b-field>
          <b-field label="Animal">
            <b-autocomplete
                v-model="animal"
                :data="filteredDataObj"
                placeholder="Defina o animal..."
                icon="magnify"
                field="nickname"
                @select="option => selectedAnimal = option.id">
                <template slot="empty">No results found</template>
            </b-autocomplete>
          </b-field>
          <b-field label="Descrição">
            <b-input v-model="description" @input="isReady()" type="textarea" />
          </b-field>
        </form>
      </template>
      <template #footer class="columns is-centered">
        <div class="action-modal">
          <b-button @click="create()" class="btn-secundary" :disabled="disabledButton">Criar</b-button>
        </div>
      </template>
    </modal-template>
  </div>
</template>

<script>
import ModalTemplate from "../shared/ModalTemplate";
export default {
  name: "AddNewTask",
  components: { ModalTemplate },
  data() {
    return {
      data: [],
      disabledButton: true,
      date: null,
      description: null,
      name: '',
      animal: '',
      title: null,
      selectedUser: null,
      selectedAnimal: null  
    };
  },
  mounted () {
    this.$store.dispatch('person/getPersons')
    this.$store.dispatch('animals/getAnimals')
  },
  computed: {
    filteredDataArray() {
      return this.dataUsers.filter((option) => {
        return option.name
          .toString()
          .toLowerCase()
          .indexOf(this.name.toLowerCase()) >= 0
      })
    },
    filteredDataObj() {
      return this.dataAnimals.filter((option) => {
        return option.nickname
          .toString()
          .toLowerCase()
          .indexOf(this.animal.toLowerCase()) >= 0
      })
    },
    dataUsers () {
      return this.$store.state.person.dataPerson
    },
    dataAnimals () {
      return this.$store.state.animals.animalsData
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
    },
    isReady () {
      if (
        this.title &&
        this.selectedUser &&
        this.selectedAnimal &&
        this.date &&
        this.description
      ) {
        this.disabledButton = false
      } else {
        this.disabledButton = true
      }
    },
    create () {
      this.$store.dispatch('tasks/addNewTask', {
        title: this.title,
        responsibleUserId: this.selectedUser,
        animalId: this.selectedAnimal,
        date: this.date,
        description: this.description,
        taskStatus: 'UNCOMPLETED'
      }).then(() => { this.toggleInfoModal() })
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
