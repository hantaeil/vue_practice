<template>
  <td @click="onClickTd">{{ colData }}</td>
</template>

<script>
  export default {
    name: 'TdComponent',
    props: {
      rowIndex: {
        type: Number,
        required: true,
      },
      colData: {
        type: String,
        required: true,
      },
      colIndex: {
        type: Number,
        required: true,
      },
    },
    components: {},
    data() {
      return {

      }
    },
    methods: {
      onClickTd: function () {
        if (this.colData)
          return false
        const rootData = this.$root.$data
        const tableData = rootData.tableData
        this.$set(tableData[this.rowIndex], this.colIndex, rootData.turn)

        let isFinish = false
        const turn = rootData.turn
        const rowIndex = this.rowIndex
        const colIndex = this.colIndex
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
        rootData.turn = rootData.turn === '🤢' ? '😊' : '🤢'
        if (isFinish) {
          rootData.winner = turn
          rootData.tableData = Array(3).fill(null).map(() => Array(3).fill(''))
          return false
        }
        const hasBlank = this.hasBlank(tableData)
        if (!hasBlank) {
          rootData.tableData = Array(3).fill(null).map(() => Array(3).fill(''))
          rootData.winner = ''
        }
      },
      hasBlank(tableData) {
        return [].concat(...tableData).includes('')
      },
    },
  }
</script>

<style scoped>

</style>