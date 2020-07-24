<template>
  <div>{{ text }}</div>
</template>

<script lang="ts">
export default {
  setup() {
    const text: String = "the selection screen";
    return {
      text,
    };
  },
};
</script>

<style lang="scss" scoped></style>
