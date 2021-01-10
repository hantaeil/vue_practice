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
    methods: {},
  }
</script>

<style scoped>
  table {
    border-collapse: collapse;
  }
</style>