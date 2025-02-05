<template>
  <div class="card">
    <div class="title">Is Process</div>
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id">
        {{ todo.title }}
        <div class="buttons">
          <div @click="removeTodo(todo.id)" class="delete">Delete</div>
          <div @click="openModal(index)" class="delete">Move</div>
        </div>
      </li>
    </ul>
    <div class="modal" v-show="isModalOpen">
      <Move :taskId="taskId" :cards="['NewTasks', 'Done']" @close="isModalOpen = false" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import Move from './Move.vue'

const store = useStore()

const todos = computed(() => store.state.todos.list.filter((todo) => todo.status === 'IsProcess'))

//delete todo

const removeTodo = (id) => {
  store.commit('todos/remove', id)
}

//open modal

const isModalOpen = ref(false)
const taskId = ref(0)

const openModal = (index) => {
  taskId.value = todos.value[index].id
  isModalOpen.value = !isModalOpen.value
}
</script>

<style scoped>
.card {
  background: #ffffff;
  padding: 25px;
  width: 350px;
  border-radius: 10px;
}
.title {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-left: 5px;
  justify-content: center;
  color: #cba7fc;
  font-size: 20px;
  font-weight: 600;
}
ul {
  list-style-type: none;
  font-size: 18px;
  cursor: pointer;
  padding: 10px;
}
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f6eaff;
  margin-bottom: 10px;
  border-radius: 5px;
  padding-left: 15px;
}
.buttons {
  display: flex;
  justify-content: space-between;
}
.delete {
  bottom: 0;
  border-radius: 8px;
  background: #54219b;
  color: white;
  padding: 10px;
  margin-left: 5px;
}
</style>
