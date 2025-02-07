import { createStore } from 'vuex'

const products = {
  namespaced: true,
  state: {
    list: [],
  },
  getters: {
    getProducts(state) {
      return state.list
    },
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
    newtasks: [
      {
        id: 1,
        title: 'Task One',
      },
    ],
    isprocess: [
      {
        id: 1,
        title: 'Task Two',
      },
    ],
    done: [
      {
        id: 1,
        title: 'Task Three',
      },
    ],
  },
  getters: {
    getNewTasks: (state) => state.newtasks,
    getIsProcess: (state) => state.isprocess,
    getDone: (state) => state.done,
  },
  mutations: {
    add(state, todo) {
      state.newtasks.unshift(todo)
    },
    remove(state, { id, key }) {
      state[key] = state[key].filter((todo) => todo.id !== id)
    },
    moveTodo(state, { fromKey, toKey, taskId }) {
      const taskIndex = state[fromKey].findIndex((todo) => todo.id === taskId)
      if (taskIndex === -1) return

      const [task] = state[fromKey].splice(taskIndex, 1)

      task.id = state[toKey].length + 1

      state[toKey].unshift(task)
    },
  },
}

export default createStore({
  state: {
    isDarkTheme: false,
  },
  getters: {
    getIsDarkTheme(state) {
      return state.isDarkTheme
    },
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
