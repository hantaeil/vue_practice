<template>
  <div>
    <table-component :table-data="tableData"/>
    <div>Turn: {{ turn }}</div>
    <div v-if="winner">Winner: {{ winner }}</div>
  </div>
</template>

<script>
  import { tableData } from './Constants'
  import TableComponent from './TableComponent'
  import EventBus from './EventBus'

  const ARRAY_SIZE = 3
  const getTableData = () => {
    return Array(ARRAY_SIZE).fill(null).map(() => Array(ARRAY_SIZE).fill(''))
  }

  export default {
    name: 'TicTacToe',
    components: {
      TableComponent,
    },
    data() {
      return {
        tableData: tableData,
        turn: '🤢',
        winner: '',
      }
    },
    methods: {
      onClickTd(rowIndex, colIndex) {
        const tableData = this.tableData
        const turn = this.turn
        let isFinish = false

        this.$set(tableData[rowIndex], colIndex, turn)

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
        this.turn = turn === '🤢' ? '😊' : '🤢'
        if (isFinish) {
          this.winner = turn
          this.tableData = Array(3).fill(null).map(() => Array(3).fill(''))
          return false
        }
        const hasBlank = this.hasBlank(tableData)
        if (!hasBlank) {
          this.tableData = Array(3).fill(null).map(() => Array(3).fill(''))
          this.winner = ''
        }
      },
      hasBlank(tableData) {
        return [].concat(...tableData).includes('')
      },
    },
    created() {
      EventBus.$on('clickTd', this.onClickTd)
    }
  }
</script>

<style scoped>
  table {
    border-collapse: collapse;
  }
</style>