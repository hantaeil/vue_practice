<template>
  <table>
    <tr-component v-for="(row, index) in tableData" :row-index="index"/>
  </table>
</template>

<script>
  import { mapState } from 'vuex'
  import TrComponent from './TrComponent'

  export default {
    name: 'TableComponent',
    components: {
      TrComponent,
    },
    computed: {
      ...mapState(['tableData']),
    },
  }
</script>

<style scoped>

</style>