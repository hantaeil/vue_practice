<template>
  <td @click="onClickTd">{{ colData }}</td>
</template>

<script>
import EventBus from './EventBus'

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

        EventBus.$emit('clickTd', this.rowIndex, this.colIndex)
      },
    },
  }
</script>

<style scoped>

</style>