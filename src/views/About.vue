<template>
  <Header />
  <main :class="{ main_dark: isDarkTheme }" class="main">
    <h3 :class="{ dark_text: isDarkTheme }">About this page</h3>
  </main>
</template>

<script setup>
import Header from '@/components/Header/Header.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const isDarkTheme = computed(() => store.getters.getIsDarkTheme)
</script>

<style scoped>
h3 {
  color: #cba7fc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 350px;
  font-size: 32px;
  font-weight: 700;
}
h3.dark_text {
  color: white !important ;
}
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
</style>
