<template>
  <Header />
  <main :class="{ main_dark: isDarkTheme }" class="main">
    <div class="container">
      <div><NewTasks /></div>
      <div><IsProcess /></div>
      <div><Done /></div>
    </div>
  </main>
</template>

<script setup>
import Header from '@/components/Header/Header.vue'
import NewTasks from '@/components/Todos/NewTasks.vue'
import IsProcess from '@/components/Todos/IsProcess.vue'
import Done from '@/components/Todos/Done.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const isDarkTheme = computed(() => store.getters.getIsDarkTheme)
</script>

<style scoped>
.main {
  margin-top: 50px;
  width: 100%;
  height: 100vh;
  background-color: #f6eaff;
  margin: -8px;
}
.main.main_dark {
  background-color: #1c012f;
}
.container {
  padding-top: 250px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding-left: 80px;
  padding-right: 100px;
}
</style>
