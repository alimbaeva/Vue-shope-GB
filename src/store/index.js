import { createStore } from 'vuex'

export default createStore({
  state: {
    catalog: [],
    cart: []
  },
  getters: {
    getCatalog: (state) => [...state.catalog],
    getCart: (state) => [...state.cart]
  },
  mutations: {
    setCatalog: (state, catalog) => { state.catalog = catalog },
    setCart: (state, cart) => { state.cart = cart },
    addToCart: (state, product) => { state.cart.push(product) },
    removeFromeCart: (state, id) => {
      const idx = state.cart.findIndex((item) => item.id === id)
      state.cart.splice(idx, 1);
    }
  },
  actions: {
    loadCatalog({ commit }) {
      return fetch(`/api/v1/catalog`)
        .then((response) => response.json())
        .then((data) => {
          commit('setCatalog', data)
        })
    },
    loadCart({ commit }) {
      return fetch(`/api/v1/cart`)
        .then((response) => response.json())
        .then((data) => {
          commit('setCart', data)
        })
    },
    addToCart({ commit }, product) {
      return fetch(`/api/v1/cart`, {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(product)
      })
        .then((response) => response.json())
        .then((data) => {
          commit('addToCart', product)
        })
    },
    removeFromCart({ commit }, id) {
      return fetch(`/api/v1/cart/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': "application/json" }
      })
        .then((response) => response.json())
        .then((data) => {
          commit('removeFromCart', id)
        })
    },
  },
  modules: {
  }
})
