<template>
  <tr>
    <td-component v-for="(colData, index) in rowData" :key="index" :row-index="rowIndex" :col-data="colData" :col-index="index"/>
  </tr>
</template>

<script>
  import TdComponent from './TdComponent'

  export default {
    name: 'TrComponent',
    props: {
      rowData: {
        type: Array,
        required: true,
      },
      rowIndex: {
        type: Number,
        required: true,
      },
    },
    components: {
      TdComponent,
    },
    data() {
      return {}
    },
    methods: {},
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