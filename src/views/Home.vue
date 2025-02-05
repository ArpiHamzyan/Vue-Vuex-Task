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
import Header from '@/components/Header.vue'
import NewTasks from '@/components/NewTasks.vue'
import IsProcess from '@/components/IsProcess.vue'
import Done from '@/components/Done.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const isDarkTheme = computed(() => store.state.isDarkTheme)
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
  justify-content: space-around;
}
</style>
