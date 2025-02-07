<template>
  <Header />
  <main :class="{ main_dark: isDarkTheme }" class="main">
    <CreateProduct />
    <ListProduct />
  </main>
</template>

<script setup>
import Header from '@/components/Header/Header.vue'
import CreateProduct from '@/components/Products/CreateProduct.vue'
import ListProduct from '@/components/Products/ListProduct.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const store = useStore()

const isDarkTheme = computed(() => store.getters.getIsDarkTheme)

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
