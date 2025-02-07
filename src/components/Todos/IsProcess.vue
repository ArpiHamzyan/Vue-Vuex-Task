<template>
  <div class="card">
    <div class="title">Is Process</div>
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
        :fromKey="'isprocess'"
        :cards="['newtasks', 'done']"
        :x="positions.x"
        :y="positions.y"
        @close="isModalOpen = false"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import Move from '../Modal/Move.vue'

const store = useStore()

const todos = computed(() => store.getters['todos/getIsProcess'])

//delete todo

const removeTodo = (id) => {
  store.commit('todos/remove', { id, key: 'isprocess' })
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
