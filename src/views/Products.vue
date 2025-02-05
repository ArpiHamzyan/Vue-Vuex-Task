<template>
  <Header />
  <main :class="{ main_dark: isDarkTheme }" class="main">
    <CreateProduct />
    <ListProduct />
  </main>
</template>

<script setup>
import Header from '@/components/Header.vue'
import CreateProduct from '@/components/CreateProduct.vue'
import ListProduct from '@/components/ListProduct.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const store = useStore()

const isDarkTheme = computed(() => store.state.isDarkTheme)

onMounted(() => {
  store.dispatch('products/get')
})
</script>

<style scoped>
.main {
  margin-top: 50px;
  width: 100%;
  height: auto;
  background-color: #f6eaff;
}
.main.main_dark {
  background-color: #1c012f;
}
</style>
