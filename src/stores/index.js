import { createStore } from 'vuex'

const products = {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    add(state, product) {
      state.list.unshift(product)
    },
    set(state, products) {
      state.list = products
    },
    remove(state, id) {
      state.list = state.list.filter((product) => product.id !== id)
    },
  },
  actions: {
    async get({ commit }) {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      commit('set', data)
    },
    async create({ commit }, product) {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })

      const data = await response.json()
      commit('add', data)
    },
    async delete({ commit }, id) {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        commit('remove', id)
      }
    },
  },
}

const todos = {
  namespaced: true,
  state: {
    list: [
      {
        id: 1,
        title: 'Task One',
        status: 'NewTasks',
      },
      {
        id: 2,
        title: 'Task Two',
        status: 'NewTasks',
      },
    ],
  },
  mutations: {
    add(state, todo) {
      state.list.unshift(todo)
    },
    remove(state, id) {
      state.list = state.list.filter((todo) => todo.id !== id)
    },
    moveTodo(state, { status, taskId }) {
      const task = state.list.find((todo) => todo.id == taskId)
      if (task) {
        task.status = status
      }
    },
  },
}

export default createStore({
  state: {
    isDarkTheme: false,
  },
  mutations: {
    setDarkTheme(state, value) {
      state.isDarkTheme = value
    },
    toggleDarkTheme(state) {
      state.isDarkTheme = !state.isDarkTheme
    },
  },
  actions: {},
  modules: {
    products,
    todos,
  },
})
