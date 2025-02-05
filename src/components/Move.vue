<template>
  <div class="modal">
    <ul>
      <li v-for="card in props.cards" :key="card">
        <div @click="changeStatus(card, props.taskId)" class="button">{{ card }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const props = defineProps(['taskId', 'cards'])
const emit = defineEmits(['close'])

const store = useStore()

const changeStatus = (card, taskId) => {
  store.commit('todos/moveTodo', { status: card, taskId })
  emit('close')
}
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  left: 50%;
  position: fixed;
  top: 50%;
  width: 180px;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
ul {
  list-style-type: none;
  padding: 0px;
}
.button {
  bottom: 0;
  border-radius: 8px;
  background: #54219b;
  color: white;
  padding: 10px;
  margin-left: 5px;
  margin-bottom: 3px;
}
.modal {
  transform: translate(20%, 10%);
}
</style>
