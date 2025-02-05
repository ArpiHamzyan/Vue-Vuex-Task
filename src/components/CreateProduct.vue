<template>
  <div class="form">
    <form @submit.prevent="submit">
      <div class="add_div">
        <label class="label" for="title">Title</label>
        <input
          :class="{ input_dark: isDarkTheme }"
          v-model="title"
          class="input"
          type="text"
          name="title"
        />

        <label class="label" for="price">Price</label>
        <input
          :class="{ input_dark: isDarkTheme }"
          v-model="price"
          class="input"
          type="number"
          name="price"
        />

        <label class="label" for="category">Category</label>
        <input
          :class="{ input_dark: isDarkTheme }"
          v-model="category"
          class="input"
          type="text"
          name="category"
        />

        <label class="label" for="description">Description</label>
        <input
          :class="{ input_dark: isDarkTheme }"
          v-model="description"
          class="input"
          type="text"
          name="description"
        />

        <label class="label" for="image">Image</label>
        <input
          :class="{ input_dark: isDarkTheme }"
          class="input"
          v-model="image"
          type="text"
          name="image"
        />
      </div>

      <button class="button" type="submit">Add</button>
    </form>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'

const store = useStore()

const isDarkTheme = computed(() => store.state.isDarkTheme)

const title = ref('')
const price = ref()
const category = ref('')
const description = ref('')
const image = ref('')

const submit = async () => {
  const product = {
    title: title.value,
    price: price.value,
    category: category.value,
    description: description.value,
    image: image.value || 'https://i.pravatar.cc',
  }

  await store.dispatch('products/create', product)

  title.value = ''
  price.value = ''
  category.value = ''
  description.value = ''
  image.value = ''
}
</script>

<style scoped>
.form {
  padding-top: 50px;
  padding-left: 50px;
}
.label {
  color: #cba7fc;
  padding-right: 10px;
  padding-left: 20px;
}
.input {
  width: 200px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.input.input_dark {
  background-color: #e4d1ff;
}

.button {
  background-color: #cba7fc;
  border-radius: 8px;
  border-style: none;
  color: #ffffff;
  font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 10px 16px;
  margin-top: 20px;
}

.button:hover {
  background-color: #f082ac;
}
.add_div {
  display: grid;
}
</style>
