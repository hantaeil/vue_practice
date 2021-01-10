<template>
  <div>
    <div id="test">Your input text: {{ input_model }}</div>
    <label>
      <input type="text" v-model="input_model" />
    </label>
  </div>
</template>

<script>
export default {
  name: "NumberBaseball",
  data() {
    return {
      name: `tae-il han`,
      input_model: '',
    }
  },
}
</script>

<style scoped>
  #test {
    background-color: red;
  }
</style>