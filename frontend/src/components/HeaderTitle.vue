<template>
  <h1>{{ testmsg }}</h1>
</template>

<script lang="ts">
export default {
  data() {
    return {
      testmsg: "ThisJS.training",
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 42px;
  cursor: pointer;
}
</style>
