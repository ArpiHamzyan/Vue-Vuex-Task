<template>
  <header>
    <nav :class="{ navbar_dark: isDarkTheme }" class="navbar">
      <div class="todo"><a href="/">ToDo</a></div>
      <ul class="nav-links">
        <li><a href="/about">About</a></li>
        <li><a href="/products">Products</a></li>
      </ul>
      <button @click="toggleTheme()">
        <img :src="isDarkTheme ? light : dark" alt="" />
      </button>
    </nav>
  </header>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

//images
import dark from '../assets/theme-dark.svg'
import light from '../assets/theme-light.svg'

//dark light mode
const isDarkTheme = computed(() => store.state.isDarkTheme)

onMounted(() => {
  const savedTheme = localStorage.getItem('darkMode')
  if (savedTheme !== null) {
    store.commit('setDarkTheme', savedTheme === 'true')
  }
})

const toggleTheme = () => {
  store.commit('toggleDarkTheme')
  localStorage.setItem('darkMode', isDarkTheme.value)
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.navbar.navbar_dark {
  background: #2b045e !important;
  color: white !important;
}

body {
  font-family: Arial, sans-serif;
}
a {
  color: white;
  text-decoration: none;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #cba7fc;
  color: white;
  padding: 15px 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
.todo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin: 0 15px;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-size: 1rem;
}
</style>
