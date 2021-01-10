<template>
  <tr>
    <td-component v-for="(col, index) in rowData" :row-index="rowIndex" :col-index="index"/>
  </tr>
</template>

<script>
  import { mapState } from 'vuex'
  import TdComponent from './TdComponent'

  export default {
    name: 'TrComponent',
    props: {
      rowIndex: {
        type: Number,
        required: true,
      },
    },
    components: {
      TdComponent,
    },
    computed: {
      ...mapState({
        rowData(state) {
          return state.tableData[this.rowIndex]
        },
      }),
    },
  }
</script>

<style scoped>
  td {
    border: solid 1px black;
    width: 40px;
    height: 40px;
    text-align: center;
  }
</style>