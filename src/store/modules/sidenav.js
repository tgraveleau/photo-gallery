const state = {
  isOpen: false
}
const getters = {
  isOpen: state => state.isOpen
}
const mutations = {
  toggle: state => state.isOpen = !state.isOpen,
  close: state => state.isOpen = false
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}