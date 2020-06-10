<template>
  <section class="container">
    <div class="hero">
      <div class="text">
        <h1 class="title">Quadro de Tarefas</h1>
        <p class="subtitle">Aqui estão as tarefas ativas para você</p>
      </div>
      <div v-if="role != 4" class="action">
        <b-button type="is-danger" icon-left="plus" rounded @click="toggleNewTask()">Tarefa</b-button>
      </div>
      <hr />
    </div>
    
    <div v-if="tasks.length === 0 ? false : true" class="board columns is-multiline is-desktop">
      <div class="card column is-4 is-variable" v-for="option in tasks" :key="option.id">
        <h1 class="card-board-title">{{ option.title }}</h1>
        <div class="action-icons">
          <b-icon @click.native="toggleTask(option)" type="is-danger" icon="comment-eye" />
          <b-icon v-if="role != 4" @click.native="toggleEditTask(option)" type="is-danger" icon="pencil" />
          <b-icon v-if="role != 4" @click.native="toggleDeleteTask(option)" type="is-danger" icon="delete" />
        </div>
        <p class="card-board-day">{{ option.day }}</p>
      </div>
    </div>
    <div v-else class="board">
      <no-data />
    </div>  
    <task v-if="task" :toggle="task" :data="selectedTask" @closeModal="toggleTask()" />
    <delete-task :toggle="deleteTask" :data="selectedTask" @closeModal="toggleDeleteTask()" />
    <edit-task
      v-if="editTask"
      :toggle="editTask"
      :data="selectedTask"
      @closeModal="toggleEditTask()"
    />
    <add-new-task :toggle="newTask" @closeModal="toggleNewTask()" />
  </section>
</template>

<script>
import AddNewTask from "@/components/modal/AddNewTask";
import DeleteTask from "@/components/modal/DeleteTask";
import EditTask from "@/components/modal/EditTask";
import Task from "@/components/modal/Task";
import NoData from '@/components/shared/NoData'

export default {
  name: "Board",
  components: { AddNewTask, DeleteTask, EditTask, Task, NoData },
  data() {
    return {
      role: null,
      task: false,
      newTask: false,
      editTask: false,
      deleteTask: false,
      users: ["Matheus", "Wesley", "Angleby"],
      user: "",
      selected: null,
      selectedTask: {},
    };
  },
  computed: {
    tasks () {
      return this.$store.state.tasks.tasksData
    }
  },
  mounted () {
    this.role = this.$store.state.user.user.role
    if (this.$store.state.user.user.role === 1 || this.$store.state.user.user.role === 2) {
      this.$store.dispatch('tasks/getAllTasks')
    } else {
      this.$store.dispatch('tasks/getUserTasks')
    }
  },
  methods: {
    toggleNewTask() {
      this.newTask = !this.newTask;
    },
    toggleTask(value) {
      this.selectedTask = value;
      this.task = !this.task;
    },
    toggleEditTask(value) {
      this.selectedTask = value;
      this.editTask = !this.editTask;
    },
    toggleDeleteTask(value) {
      this.selectedTask = value;
      this.deleteTask = !this.deleteTask;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/stylesheet/base";
.filters {
  margin-top: 1.5rem;
}

.board {
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1.5rem;
  .filter {
    width: 100%;
    .field {
      width: 33%;
      margin: 0 auto 1rem auto;
    }
  }
  .card {
    display: flex;
    margin: 0.75rem;
    border-top: 0.25rem solid $primary;
    max-width: 25%;
    height: 6rem;
    background-color: #fafafa;
    .card-board-title {
      font-size: 0.85rem;
      font-weight: $font-bold;
    }
    .action-icons {
      cursor: pointer;
      position: absolute;
      right: 0.35rem;
    }
    .card-board-day {
      position: absolute;
      right: 0.35rem;
      bottom: 0.35rem;
      font-size: 0.7rem;
      text-align: right;
      font-weight: $font-light;
    }
  }
}

@media (max-width: 64rem) {
  .board {
    .filter .field {
      width: 80%;
    }
    .card {
      max-width: 100%;
    }
  }
}
</style>
