import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getTableData = () => {
  const ARRAY_SIZE = 3
  return Array(ARRAY_SIZE).fill(null).map(() => Array(ARRAY_SIZE).fill(''))
}

const hasBlank = (table) => {
  return [].concat(...table).includes('')
}

export const SET_WINNER = `SET_WINNER`
export const CLICK_TD = `CLICK_TD`
export const CHANGE_TURN = `CHANGE_TURN`
export const RESET_GAME = `RESET_GAME`
export const NO_WINNER = `NO_WINNER`

export default new Vuex.Store({
  state: {
    tableData: getTableData(),
    turn: '🤢',
    winner: '',
  },  // vue data
  getters: {

  },  // vue computed
  mutations: {
    [SET_WINNER](state, winner) {
      state.winner = winner
    },
    [CLICK_TD](state, { rowIndex, colIndex }) {
      Vue.set(state.tableData[rowIndex], colIndex, state.turn)
    },
    [CHANGE_TURN](state) {
      state.turn = state.turn === '🤢' ? '😊' : '🤢'
    },
    [RESET_GAME](state) {
      state.tableData = getTableData()
    },
    [NO_WINNER](state) {
      state.tableData = getTableData()
    },
  },  // use to modify state (async)
  actions: {

  },  // multiple mutation or sync
})