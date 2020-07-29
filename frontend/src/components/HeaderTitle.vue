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
  line-height: 43px;
  font-weight: 800;
  color: #2f3144;
  cursor: pointer;
}
</style>
