<template>
  <div class="products">
    <div
      v-for="product in products"
      :key="product.id"
      :class="{ product_dark: isDarkTheme }"
      class="product"
    >
      <div class="image">
        <img :src="product.image" alt="" style="width: 100%" />
      </div>
      <div class="container">
        <ul>
          <li :class="{ li_dark: isDarkTheme }">
            <span :class="{ bold_dark: isDarkTheme }" class="bold">Title: </span>{{ product.title }}
          </li>
          <li :class="{ li_dark: isDarkTheme }">
            <span :class="{ bold_dark: isDarkTheme }" class="bold">Price:</span> {{ product.price }}
          </li>
          <li :class="{ li_dark: isDarkTheme }">
            <span :class="{ bold_dark: isDarkTheme }" class="bold">Category:</span>
            {{ product.category }}
          </li>
          <li :class="{ li_dark: isDarkTheme }">
            <span :class="{ bold_dark: isDarkTheme }" class="bold">Description:</span>
            {{ product.description }}
          </li>
        </ul>
        <div @click="deleteProduct(product.id)" class="delete">Delete</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const isDarkTheme = computed(() => store.getters.getIsDarkTheme)

const products = computed(() => store.getters['products/getProducts'])

const deleteProduct = (id) => {
  store.dispatch('products/delete', id)
}
</script>

<style scoped>
.products {
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
}
.bold {
  color: #54219b;
}
.bold.bold_dark {
  color: #715895;
}
img {
  height: 300px;
  border-radius: 8px;
}
.product {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 30%;
  border-radius: 8px;
}
.product.product_dark {
  background-color: #e4d1ff;
}
.product:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.container {
  padding: 2px 16px;
}
ul {
  list-style-type: none;
}
li {
  color: #cba7fc;
  font-size: 18px;
}
.li_dark {
  color: #1c012f;
}
.delete {
  bottom: 0;
  width: 50px;
  margin-left: 280px;
  margin-bottom: 10px;
  border-radius: 8px;
  left: 50%;
  background: #54219b;
  color: white;
  padding: 10px;
  cursor: pointer;
}
</style>
