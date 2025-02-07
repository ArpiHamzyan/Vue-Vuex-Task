<template>
  <div class="card">
    <div class="title">New Tasks</div>
    <div class="todo_body">
      <input v-model="todo" class="todo_input" type="text" placeholder="Add new task" />
      <img @click="addTodo()" :src="plus" alt="" />
    </div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
        <div class="buttons">
          <div @click="removeTodo(todo.id)" class="delete">Delete</div>
          <div @click="openModal(todo.id, $event)" class="delete">Move</div>
        </div>
      </li>
    </ul>
    <div class="modal" v-show="isModalOpen">
      <Move
        :taskId="taskId"
        :fromKey="'newtasks'"
        :cards="['isprocess', 'done']"
        :x="positions.x"
        :y="positions.y"
        @close="isModalOpen = false"
      />
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import Move from '../Modal/Move.vue'
import plus from '@/assets/aaymlm710.webp'

const store = useStore()

//get tasks

const todos = computed(() => store.getters['todos/getNewTasks'])

//add todo

const todo = ref('')

const addTodo = () => {
  if (todo.value.trim() === '') {
    return
  }

  const task = {
    id: todos.value.length + 1,
    title: todo.value,
    status: 'NewTasks',
  }

  store.commit('todos/add', task)

  todo.value = ''
}

//delete todo

const removeTodo = (id) => {
  store.commit('todos/remove', { id, key: 'newtasks' })
}

//open modal

const isModalOpen = ref(false)
const taskId = ref(0)
const positions = ref({ x: 0, y: 0 })

const openModal = (id, event) => {
  positions.value = {
    x: event.clientX,
    y: event.clientY,
  }

  if (taskId.value == id) {
    isModalOpen.value = !isModalOpen.value
  } else {
    isModalOpen.value = true
  }
  taskId.value = id
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
.todo_body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f6eaff;
  border-radius: 30px;
  padding-left: 20px;
  margin-bottom: 25px;
}
.todo_body input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  padding: 15px 0;
  font-size: 20px;
}
.todo_body img {
  cursor: pointer;
  border-radius: 40px;
  height: 15px;
  width: 15px;
  padding: 15px;
  background: #54219b;
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
