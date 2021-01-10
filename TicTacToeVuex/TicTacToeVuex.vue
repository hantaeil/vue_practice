<template>
  <div>
    <table-component :table-data="tableData"/>
    <div>Turn: {{ turn }}</div>
    <div v-if="winner">Winner: {{ winner }}</div>
  </div>
</template>

<script>
  import store from './store'
  import { mapState } from 'vuex'
  import TableComponent from './TableComponent'

  export default {
    name: 'TicTacToe',
    store,
    components: {
      TableComponent,
    },
    computed: {
      ...mapState(['tableData', 'turn', 'winner']),
    },
  }
</script>

<style scoped>
  table {
    border-collapse: collapse;
  }
</style>