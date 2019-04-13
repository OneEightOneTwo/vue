<template>
  <div>
    <Xsearch :bool="bool"/>
  </div>
</template>

<script>
import Xsearch from "../components/Xsearch.vue";
export default {
  data() {
    return {
      bool: true
    };
  },
  components: {
    Xsearch
  }
};
</script>

<style>
</style>
