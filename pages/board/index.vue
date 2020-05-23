<template>
  <section class="container">
    <div class="hero">
      <div class="text">
        <h1 class="title">Quadro de Tarefas</h1>
        <p class="subtitle">Aqui estão as tarefas ativas para você</p>
      </div>
      <div class="action">
        <b-button type="is-danger" icon-left="plus" rounded @click="toggleNewTask()">Criar tarefa</b-button>
      </div>
      <hr />
    </div>
    <div class="board columns is-multiline is-desktop">
      <div
        class="card column is-4 is-variable"
        v-for="task in tasks"
        :key="task.title"
        @click="toggleTask(task)"
      >
        <h1 class="card-board-title">{{ task.title }}</h1>
        <p class="card-board-day">{{ task.day }}</p>
      </div>
    </div>

    <task :toggle="task" :data="selectedTask" @closeModal="toggleTask()" />

    <add-new-task :toggle="newTask" @closeModal="toggleNewTask()" />
  </section>
</template>

<script>
import AddNewTask from "@/components/modal/AddNewTask";
import Task from "@/components/modal/Task";

export default {
  name: "Board",
  components: { AddNewTask, Task },
  data() {
    return {
      task: false,
      newTask: false,
      selectedTask: {},
      tasks: [
        {
          title: "Dar comida para o 1",
          user: "Angleby",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi alias temporibus at? Quod, nostrum nam!",
          day: "22/07/2020"
        },
        { 
          title: "Dar comida para o 2", 
          user: "Matheus",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi alias temporibus at? Quod, nostrum nam!",
          day: "22/07/2020" 
        },
        { 
          title: "Dar comida para o 3", 
          user: "Wesley",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi alias temporibus at? Quod, nostrum nam!",
          day: "22/07/2020" 
        },
        { 
          title: "Dar comida para o 4", 
          user: "Angleby",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi alias temporibus at? Quod, nostrum nam!",
          day: "22/07/2020" 
        },
        { 
          title: "Dar comida para o 5", 
          user: "Matheus",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi alias temporibus at? Quod, nostrum nam!",
          day: "22/07/2020" 
        },
        { 
          title: "Dar comida para o 6", 
          user: "Wesley",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi alias temporibus at? Quod, nostrum nam!",
          day: "22/07/2020" 
        },
        { 
          title: "Dar comida para o 7", 
          user: "Angleby",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi alias temporibus at? Quod, nostrum nam!",
          day: "22/07/2020" 
        },
        { 
          title: "Dar comida para o 8", 
          user: "Matheus",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi alias temporibus at? Quod, nostrum nam!",
          day: "22/07/20202" 
        },
        { 
          title: "Dar comida para o 9", 
          user: "Wesley",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi alias temporibus at? Quod, nostrum nam!",
          day: "22/07/2020" 
        }
      ]
    };
  },
  methods: {
    toggleNewTask() {
      this.newTask = !this.newTask;
    },
    toggleTask(value) {
      this.selectedTask = value;
      this.task = !this.task;
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
  .card {
    margin: 0.75rem;
    border-top: 0.25rem solid $primary;
    max-width: 25%;
    height: 6rem;
    background-color: #fafafa;
    cursor: pointer;
    .card-board-title {
      font-size: 0.85rem;
      font-weight: $font-bold;
    }

    .card-board-day {
      font-size: 0.7rem;
      margin-top: 1.75rem;
      text-align: right;
      font-weight: $font-light;
    }
  }
}

@media (max-width: 64rem) {
  .board .card {
    max-width: 100%;
  }
}
</style>
