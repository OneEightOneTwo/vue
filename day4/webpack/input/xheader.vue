<template>
  <div>
    <p v-text="name"></p>
  </div>
</template>
<script>
// module.exports = {}
export default {
  data() {
      return {
          name: "yao"
      }
  },
  mounted() {}
};
</script>
<style scoped>
p {
  color: red;
}
</style>

