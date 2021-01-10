<template>
  <td @click="onClickTd">{{ colData }}</td>
</template>

<script>
  import { mapState } from 'vuex'
  import { CHANGE_TURN, CLICK_TD, RESET_GAME, SET_WINNER } from './store'

  export default {
    name: 'TdComponent',
    props: {
      rowIndex: {
        type: Number,
        required: true,
      },
      colIndex: {
        type: Number,
        required: true,
      },
    },
    methods: {
      onClickTd() {
        if (this.colData)
          return false
        let isFinish = false
        const turn = this.turn
        const rowIndex = this.rowIndex
        const colIndex = this.colIndex
        const tableData = this.tableData

        this.$store.commit(CLICK_TD, { rowIndex, colIndex })
        if (tableData[rowIndex][0] === turn && tableData[rowIndex][1] === turn && tableData[rowIndex][2] === turn) {
          isFinish = true
        }
        if (tableData[0][colIndex] === turn && tableData[1][colIndex] === turn && tableData[2][colIndex] === turn) {
          isFinish = true
        }
        if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
          isFinish = true
        }
        if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
          isFinish = true
        }

        this.$store.commit(CHANGE_TURN)
        if (isFinish) {
          this.$store.commit(SET_WINNER, turn)
          this.$store.commit(RESET_GAME)
          return false
        }
        const hasBlank = this.hasBlank(tableData)
        if (!hasBlank) {
          this.$store.commit(RESET_GAME)
        }
      },
      hasBlank(tableData) {
        return [].concat(...tableData).includes('')
      },
    },
    computed: {
      // ...mapState(['tableData', 'turn', 'colData']),
      ...mapState({
        tableData: 'tableData',
        turn: 'turn',
        colData(state) {
          return state.tableData[this.rowIndex][this.colIndex]
        }
      }),
    },
  }
</script>

<style scoped>

</style>